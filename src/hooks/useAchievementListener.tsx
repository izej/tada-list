import { useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

export const useAchievementListener = (profileId: string, onAchievement: (a: any) => void) => {
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/ws");
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        client.subscribe(`/topic/achievements/${profileId}`, (message) => {

          const achievement = JSON.parse(message.body);
          onAchievement(achievement);
        });
      }
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, [profileId, onAchievement]);
};
