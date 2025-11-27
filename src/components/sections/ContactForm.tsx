"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, CheckCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, "Name is required"),
    organization: z.string().min(2, "Organization is required"),
    role: z.string().min(2, "Role is required"),
    email: z.string().email("Invalid email address"),
    region: z.string().min(2, "Region is required"),
    partnerType: z.string().min(1, "Please select a partner type"),
    products: z.array(z.string()).min(1, "Select at least one product"),
    success: z.string().min(10, "Please tell us a bit more about your goals"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            products: [],
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                reset();
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <section id="contact" className="py-20 bg-white">
                <div className="container max-w-2xl text-center">
                    <div className="bg-success/10 w-20 h-20 rounded-full flex items-center justify-center text-success mx-auto mb-6">
                        <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-bold font-heading mb-4 text-primary">
                        Message Received!
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Thanks for reaching out. We'll be in touch shortly to schedule your
                        partner call.
                    </p>
                    <button
                        onClick={() => setIsSuccess(false)}
                        className="text-primary font-semibold hover:underline"
                    >
                        Send another message
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-primary">
                        Let's Partner Up
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Tell us about your organization and how we can help.
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">Name</label>
                            <input
                                {...register("name")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Jane Doe"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs">{errors.name.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">
                                Organization
                            </label>
                            <input
                                {...register("organization")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Acme Corp"
                            />
                            {errors.organization && (
                                <p className="text-red-500 text-xs">
                                    {errors.organization.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">Role</label>
                            <input
                                {...register("role")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Director of Innovation"
                            />
                            {errors.role && (
                                <p className="text-red-500 text-xs">{errors.role.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">Email</label>
                            <input
                                {...register("email")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="jane@example.com"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs">{errors.email.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">Region</label>
                            <input
                                {...register("region")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                placeholder="Lagos, Nigeria"
                            />
                            {errors.region && (
                                <p className="text-red-500 text-xs">{errors.region.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-primary">
                                Partner Type
                            </label>
                            <select
                                {...register("partnerType")}
                                className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white"
                            >
                                <option value="">Select type...</option>
                                <option value="telco">Telco</option>
                                <option value="bank">Bank / Fintech</option>
                                <option value="employer">Employer</option>
                                <option value="investor">Investor</option>
                                <option value="ngo">NGO / Gov</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.partnerType && (
                                <p className="text-red-500 text-xs">
                                    {errors.partnerType.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">
                            Products of Interest
                        </label>
                        <div className="flex flex-wrap gap-4">
                            {["Iwanna", "Framerly", "InterviewsFirst", "Linda"].map(
                                (product) => (
                                    <label key={product} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            value={product}
                                            {...register("products")}
                                            className="w-4 h-4 text-primary border-muted rounded focus:ring-primary"
                                        />
                                        <span className="text-sm text-muted-foreground">
                                            {product}
                                        </span>
                                    </label>
                                )
                            )}
                        </div>
                        {errors.products && (
                            <p className="text-red-500 text-xs">{errors.products.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">
                            What would success look like in 6-12 months?
                        </label>
                        <textarea
                            {...register("success")}
                            className="w-full px-4 py-3 rounded-lg border border-muted focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[120px]"
                            placeholder="We want to launch a pilot..."
                        />
                        {errors.success && (
                            <p className="text-red-500 text-xs">{errors.success.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin" /> Sending...
                            </>
                        ) : (
                            "Send Partner Request"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
