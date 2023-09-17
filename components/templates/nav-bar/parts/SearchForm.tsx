import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  searchQuery: z.string(),
  searchOn: z.string(),
});

const SearchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  const formSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        autoComplete="off"
        onSubmit={form.handleSubmit(formSubmit)}
        className="flex items-center border rounded"
      >
        <Button type="submit" variant="ghost">
          <Search />
        </Button>

        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Search"
                  {...field}
                  className="border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Separator orientation="vertical" className="h-10" />

        <FormField
          control={form.control}
          name="searchOn"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-32 border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Talents" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="talents">Talents</SelectItem>
                  <SelectItem value="jobs">Jobs</SelectItem>
                  <SelectItem value="Companies">Companies</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SearchForm;
