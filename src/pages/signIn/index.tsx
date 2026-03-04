import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup } from "@/components/ui/field";
import CustomInput from "@/components/app-components/app-Input";
import useSignIn from "@/hooks/use-signin";
import type { SignInInput } from "@/gql/graphql";
import ButtonSpinner from "@/components/app-components/app-spinner";
import useToast from "@/hooks/use-toast";
import useAuthStore from "@/zustand/auth-store";
import { useNavigate } from "react-router-dom";

const SignIn = ({ className, ...props }: React.ComponentProps<"form">) => {
  const { signIn, loading } = useSignIn();
  const { error } = useToast();

  const navigate = useNavigate();

  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>();

  const onSubmit = (data: SignInInput) => {
    signIn({
      variables: {
        payload: data,
      },
      onCompleted: (res) => {
        setUser(res?.signIn ?? null);
        return navigate("/app");
      },
      onError: (err) => {
        error("Authentication", {
          description:
            err?.message ?? "Invalid email or password. Please try again.",
        });
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>

        <Field>
          <CustomInput
            label="Email"
            id="id"
            type="email"
            placeholder="email or phone number"
            required
            className="p-3"
            {...register("id", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={errors?.id?.message}
          />
        </Field>

        <Field>
          <CustomInput
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
            className="p-4"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
            error={errors?.password?.message}
          />
        </Field>

        <div>
          <div className="flex gap-3 justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 shrink-0 items-center">
                <div className="group grid size-4 grid-cols-1">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                  />
                  <svg
                    fill="none"
                    viewBox="0 0 14 14"
                    className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                  >
                    <path
                      d="M3 8L6 11L11 3.5"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-checked:opacity-100"
                    />
                    <path
                      d="M3 7H11"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="opacity-0 group-has-indeterminate:opacity-100"
                    />
                  </svg>
                </div>
              </div>
              <label
                htmlFor="remember-me"
                className="block text-sm/6 text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div>
              <p className="text-primary">Forget your password?</p>
            </div>
          </div>
        </div>

        <Field>
          <Button type="submit" className="p-3 cursor-pointer">
            {loading ? <ButtonSpinner /> : <p>Login</p>}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
};

export default SignIn;
