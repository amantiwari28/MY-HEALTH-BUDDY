import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";

declare global {
  interface Window {
    watsonAssistantChatOptions: any;
  }
}

const WatsonChat = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Only load Watson chat for authenticated users
    if (!isAuthenticated) {
      // Remove Watson chat if user logs out
      const existing = document.getElementById("watson-chat-script");
      if (existing) {
        existing.remove();
        // Remove Watson chat widget from DOM
        const widget = document.querySelector('[class*="WatsonAssistant"]');
        if (widget) widget.remove();
      }
      return;
    }

    if (document.getElementById("watson-chat-script")) return;

    window.watsonAssistantChatOptions = {
      integrationID: "6cbfd936-0ecf-4e4d-9a22-0580398ee14d",
      region: "au-syd",
      serviceInstanceID: "bf72935d-7cd9-4b23-bf84-c3681fc5d4e1",
      onLoad: async (instance: any) => {
        await instance.render();
      },
    };

    const script = document.createElement("script");
    script.id = "watson-chat-script";
    script.src =
      "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
      (window.watsonAssistantChatOptions.clientVersion || "latest") +
      "/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
  }, [isAuthenticated]);

  return null;
};

export default WatsonChat;
