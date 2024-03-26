import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });


  return (
    <form
      className="flex flex-col gap-6 w-full"
    >
      <div className="relative">
        <Input
          type="text"
          {...register("name", {
            required: "Can't be empty",
          })}
          placeholder="Name"
          formNoValidate
        />

          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
            </span>
          </span>
      </div>

      <div className="relative">
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
            </span>
          </span>
        <Input
          type="email"
          {...register("email", {
            required: "Can't be empty",

          })}
          placeholder="Email Address"
        />
      </div>

      <div className="relative">
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
            </span>
          </span>
        <Input
          type="text"
          {...register("phone")}
          placeholder="Phone"
        />
      </div>

      <div className="relative">
          <span className="absolute flex items-center gap-2 right-2 top-1/2 -translate-y-1/2">
            <span className="text-xs/[1.625rem] italic text-primary-white">
            </span>
          </span>
        <Textarea
          {...register("message")}
          cols={40}
          rows={10}
          placeholder="Your Message"
        ></Textarea>
      </div>
      <Button type="button" variant={"dark"} className="self-end mt-4">
        submit
      </Button>
    </form>
  );
};

export default Form;
