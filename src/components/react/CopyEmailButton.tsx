import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  successLabel: string;
  failureLabel: string;
};

export function CopyEmailButton({
  email,
  label,
  successLabel,
  failureLabel,
}: CopyEmailButtonProps) {
  const [status, setStatus] = useState("");

  const copyEmail = async () => {
    if (!navigator.clipboard) {
      setStatus(failureLabel);
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      setStatus(successLabel);
    } catch {
      setStatus(failureLabel);
    }
  };

  return (
    <div className="copy-email">
      <button className="btn btn-compact" type="button" onClick={copyEmail}>
        {status === successLabel ? successLabel : label}
      </button>
      <span className="copy-status" role="status" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
