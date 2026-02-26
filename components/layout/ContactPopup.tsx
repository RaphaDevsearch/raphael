"use client";

import React, { useState } from "react";
import Popup from "@/components/ui/Popup";
import Button from "@/components/ui/Button";

export default function ContactPopup({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");

  const copyEmail = () => {
    const email = "raphael@example.com";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    // lightweight feedback
    alert("Email copied to clipboard: " + email);
  };

  const send = () => {
    // prototype behaviour — not wired to a backend
    alert("Message sent (prototype): " + message);
    setMessage("");
    onClose();
  };

  return (
    <Popup>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold">Contact</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 transition"
            aria-label="Close contact popup"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-gray-600">Quick message or copy my email.</p>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a short message..."
          className="w-full min-h-[64px] text-sm p-2 border border-gray-100 rounded-md focus:ring-0 outline-none"
        />

        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={copyEmail} className="flex-1 text-sm">
            Copy email
          </Button>

          <Button onClick={send} className="flex-1 text-sm">
            Send
          </Button>
        </div>
      </div>
    </Popup>
  );
}
