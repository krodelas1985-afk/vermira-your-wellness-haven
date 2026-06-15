import { MessageCircle } from "lucide-react";

const MESSENGER_URL = "https://www.messenger.com/t/420802291655730";

export function FloatingMessenger() {
  return (
    <a
      href={MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on Messenger"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-clay px-4 py-3 text-sm font-medium text-white shadow-2xl shadow-clay/30 ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-clay/90 sm:bottom-8 sm:right-8 sm:px-5 sm:py-3.5"
    >
      <MessageCircle className="h-5 w-5" strokeWidth={2.25} />
      <span className="hidden xs:inline sm:inline">Chat with us</span>
    </a>
  );
}
