import { useCallback, useEffect, useState } from "react";

type Serializer<T> = {
  parse: (value: string) => T;
  stringify: (value: T) => string;
};

type UrlStateOptions<T> = {
  defaultValue: T;
  serializer?: Serializer<T>;
  replace?: boolean;
};

export const serializers = {
  string: {
    parse: (v: string) => v,
    stringify: (v: string) => v,
  } as Serializer<string>,

  number: {
    parse: (v: string) => Number(v),
    stringify: (v: number) => String(v),
  } as Serializer<number>,

  boolean: {
    parse: (v: string) => v === "true",
    stringify: (v: boolean) => String(v),
  } as Serializer<boolean>,

  json: <T>() =>
    ({
      parse: (v: string) => JSON.parse(decodeURIComponent(v)) as T,
      stringify: (v: T) => encodeURIComponent(JSON.stringify(v)),
    }) as Serializer<T>,

  array: <T extends string>() =>
    ({
      parse: (v: string) => v.split(",") as T[],
      stringify: (v: T[]) => v.join(","),
    }) as Serializer<T[]>,
};

export function useUrlState<T>(
  key: string,
  options: UrlStateOptions<T>,
): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const { defaultValue, replace = false } = options;
  const serializer: Serializer<T> =
    options.serializer ?? (serializers.string as unknown as Serializer<T>);

  const getValueFromUrl = useCallback((): T => {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get(key);
    if (raw === null) return defaultValue;
    try {
      return serializer.parse(raw);
    } catch {
      return defaultValue;
    }
  }, [key, defaultValue, serializer]);

  const [state, setState] = useState<T>(getValueFromUrl);

  // Sync state when URL changes — covers both browser back/forward
  // AND cross-instance updates triggered by dispatchEvent below
  useEffect(() => {
    const onPopState = () => setState(getValueFromUrl());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [getValueFromUrl]);

  const setUrlState = useCallback(
    (value: T | ((prev: T) => T)) => {
      setState((prev) => {
        const next =
          typeof value === "function" ? (value as (p: T) => T)(prev) : value;

        const params = new URLSearchParams(window.location.search);

        if (next === defaultValue || next === null || next === undefined) {
          params.delete(key);
        } else {
          params.set(key, serializer.stringify(next));
        }

        const search = params.toString();
        const newUrl = `${window.location.pathname}${search ? `?${search}` : ""}${window.location.hash}`;

        if (replace) {
          window.history.replaceState(null, "", newUrl);
        } else {
          window.history.pushState(null, "", newUrl);
        }

        // Notify all other useUrlState instances on the page so they
        // re-read from the URL without needing a refresh or router event
        window.dispatchEvent(new PopStateEvent("popstate"));

        return next;
      });
    },
    [key, defaultValue, replace, serializer],
  );

  const clearUrlState = useCallback(() => {
    setUrlState(defaultValue);
  }, [setUrlState, defaultValue]);

  return [state, setUrlState, clearUrlState];
}

// --- Convenience hooks ---

export function useUrlString(key: string, defaultValue = "") {
  return useUrlState<string>(key, {
    defaultValue,
    serializer: serializers.string,
  });
}

export function useUrlNumber(key: string, defaultValue = 0) {
  return useUrlState<number>(key, {
    defaultValue,
    serializer: serializers.number,
  });
}

export function useUrlBoolean(key: string, defaultValue = false) {
  return useUrlState<boolean>(key, {
    defaultValue,
    serializer: serializers.boolean,
  });
}

export function useUrlJson<T>(key: string, defaultValue: T) {
  return useUrlState<T>(key, {
    defaultValue,
    serializer: serializers.json<T>(),
  });
}

export function useUrlArray<T extends string>(
  key: string,
  defaultValue: T[] = [],
) {
  return useUrlState<T[]>(key, {
    defaultValue,
    serializer: serializers.array<T>(),
  });
}
