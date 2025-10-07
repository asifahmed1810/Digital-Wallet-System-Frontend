
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router";
import { useRegisterMutation } from "@/components/redux/features/auth/auth.api";
import { toast } from "sonner";

// ✅ Zod Schema for Validation
const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["USER", "AGENT"]),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "USER",
    },
  });

  const [register]=useRegisterMutation();

  const onSubmit = async(data: RegisterFormValues) => {
   
    const userInfo={
      name:data.name,
      email:data.email,
      password:data.password,
      role:data.role
    }
    try {
      const result = await register(userInfo).unwrap();
      console.log(result);
      toast.success("User created successfully")
      
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center   dark:bg-black  transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-black p-8 rounded-2xl shadow-lg dark:shadow-gray-950/30 transition-colors duration-300">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
          Create an Account
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5 text-gray-900 dark:text-gray-100"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your name"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary text-gray-900 dark:text-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary text-gray-900 dark:text-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter password"
                      type="password"
                      {...field}
                      className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-primary focus:ring-primary dark:focus:border-primary dark:focus:ring-primary text-gray-900 dark:text-gray-100"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
                        <SelectItem value="USER">USER</SelectItem>
                        <SelectItem value="AGENT">AGENT</SelectItem>
                        
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-primary text-white hover:bg-primary/90 dark:bg-gray-800 dark:hover:bg-primary/80"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
      <div className="text-center mb-6 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline  underline-offset-4">
          Login
        </Link>
      </div>
      
    </div>
  );
}
