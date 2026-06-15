import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Send } from "lucide-react";

export type LeadFormPayload = {
  fullName: string;
  mobile: string;
  email: string;
  unitType: string;
  message: string;
  preferredTime: string;
};

type Props = {
  unitOptions: string[];
  onSubmit?: (payload: LeadFormPayload) => Promise<void> | void;
};

export function LeadForm({ unitOptions, onSubmit }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [unitType, setUnitType] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload: LeadFormPayload = {
      fullName: String(fd.get("fullName") ?? ""),
      mobile: String(fd.get("mobile") ?? ""),
      email: String(fd.get("email") ?? ""),
      unitType,
      message: String(fd.get("message") ?? ""),
      preferredTime,
    };
    setSending(true);
    try {
      await onSubmit?.(payload);
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-leaf/20 bg-card p-10 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15 text-leaf">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl">Salamat po! Your inquiry is in.</h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Joyce will reach out within one business day with pricing, current promos,
          and tour availability. For faster replies, message us on Messenger.
        </p>
        <Button
          variant="outline"
          className="mt-6 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-leaf/15 bg-card p-6 shadow-sm sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName">
          <Input id="fullName" name="fullName" required placeholder="Juan dela Cruz" />
        </Field>
        <Field label="Mobile Number" htmlFor="mobile">
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            required
            placeholder="+63 9XX XXX XXXX"
          />
        </Field>
        <Field label="Email" htmlFor="email" className="sm:col-span-2">
          <Input id="email" name="email" type="email" required placeholder="you@email.com" />
        </Field>
        <Field label="Unit Type Interested In" htmlFor="unitType">
          <Select value={unitType} onValueChange={setUnitType}>
            <SelectTrigger id="unitType" className="bg-background">
              <SelectValue placeholder="Choose a model" />
            </SelectTrigger>
            <SelectContent>
              {unitOptions.map((u) => (
                <SelectItem key={u} value={u}>
                  {u}
                </SelectItem>
              ))}
              <SelectItem value="undecided">Not sure yet — please advise</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Preferred Contact Time" htmlFor="preferredTime">
          <Select value={preferredTime} onValueChange={setPreferredTime}>
            <SelectTrigger id="preferredTime" className="bg-background">
              <SelectValue placeholder="When can we reach you?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (8am–12nn)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12nn–5pm)</SelectItem>
              <SelectItem value="evening">Evening (5pm–8pm)</SelectItem>
              <SelectItem value="anytime">Anytime</SelectItem>
            </SelectContent>
          </Select>
        </Field>
        <Field label="Message" htmlFor="message" className="sm:col-span-2">
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us what you're looking for — lot size, budget range, move-in timeline…"
          />
        </Field>
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="mt-8 h-12 w-full rounded-full bg-primary text-base font-medium text-primary-foreground hover:bg-primary/90 sm:w-auto sm:px-10"
      >
        <Send className="mr-2 h-4 w-4" />
        {sending ? "Sending…" : "Send Inquiry"}
      </Button>
      <p className="mt-4 text-xs text-muted-foreground">
        By submitting, you agree to be contacted regarding Vermira. We never share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
