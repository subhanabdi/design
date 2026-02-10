"use client"

import { useState } from "react"

export default function ConversationCta() {
  const [message, setMessage] = useState("")

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-muted">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-8">
          {"Let\u2019s start the conversation"}
        </h2>
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 mb-4 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground resize-none"
        />
        <button
          type="button"
          className="px-10 py-3 border border-foreground text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          SEND
        </button>
      </div>
    </section>
  )
}
