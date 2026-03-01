import CustomInput from "./app-Input";

const NewBranchForm = () => {
  return (
    <div>
      <form>
        <CustomInput
          label="Branch Name"
          id="name"
          type="text"
          placeholder="Branch name"
          required
          className="p-3"
        />
        <div className="my-3">
          <CustomInput
            label="Branch Phone"
            id="phone"
            type="text"
            placeholder="Branch phone"
            className="p-3"
          />
        </div>

        <CustomInput
          label="Branch Address"
          id="address"
          type="text"
          placeholder="Branch address"
          className="p-3"
        />
      </form>
    </div>
  );
};

export default NewBranchForm;
