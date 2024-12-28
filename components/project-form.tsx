"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const projectSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Must be a valid URL"),
  link: z.string().url("Must be a valid URL"),
  tags: z.string(),
  github: z.string().url("Must be a valid url"),
});



export function ProjectForm({ onSubmit } : {onSubmit : (formattedValues : Object) => void} ) {
  const form = useForm<z.infer<typeof projectSchema>>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
      link: "",
      tags: "",
      github : ""
    },
  });

  const handleSubmit = (values: z.infer<typeof projectSchema>) => {
    const formattedValues = {
      ...values,
      tags: values.tags.split(",").map((tag) => tag.trim()),
    };
    onSubmit(formattedValues);
    form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Project</CardTitle>
        <CardDescription>Add a new project to your portfolio</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Project title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Project description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com/image.jpg" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Project URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://github.com/gustavodscruz/portfolio" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            >

            </FormField>
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input placeholder="React, TypeScript, Tailwind" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Add Project</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}