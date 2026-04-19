import { useState } from "react";
import { Badge, Dropdown, Avatar, Tabs, Button, Empty, Typography } from "antd";
import {
  BellOutlined,
  HeartFilled,
  MessageOutlined,
  UserAddOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Text } = Typography;

interface Notification {
  id: string;
  type: "like" | "comment" | "follow" | "star";
  user: { name: string; avatar: string };
  message: string;
  project?: string;
  time: string;
  read: boolean;
}

const mockNotifications: Notification[] = [
  { id: "1", type: "comment", user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" }, message: "commented on", project: "AI Code Review Bot", time: "2m ago", read: false },
  { id: "2", type: "like", user: { name: "Ryan Patel", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop" }, message: "liked", project: "AI Code Review Bot", time: "15m ago", read: false },
  { id: "3", type: "follow", user: { name: "Emma Rodriguez", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop" }, message: "started following you", time: "1h ago", read: false },
  { id: "4", type: "star", user: { name: "Dev Max", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcabd9c?w=50&h=50&fit=crop" }, message: "starred", project: "Collaborative Whiteboard", time: "3h ago", read: true },
  { id: "5", type: "comment", user: { name: "Sarah Kim", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop" }, message: "replied to your comment on", project: "CLI Task Manager", time: "5h ago", read: true },
];

const typeIcon = {
  like: <HeartFilled style={{ color: "#EF4444", fontSize: 11 }} />,
  comment: <MessageOutlined style={{ color: "#F59E0B", fontSize: 11 }} />,
  follow: <UserAddOutlined style={{ color: "#22C55E", fontSize: 11 }} />,
  star: <StarFilled style={{ color: "#FACC15", fontSize: 11 }} />,
};

function NotificationList({ items }: { items: Notification[] }) {
  if (items.length === 0) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="All caught up!" style={{ padding: "32px 0" }} />;
  }
  return (
    <div style={{ maxHeight: 400, overflowY: "auto" }}>
      {items.map((n) => (
        <div
          key={n.id}
          style={{
            display: "flex",
            gap: 12,
            padding: "12px 16px",
            borderBottom: "1px solid var(--hw-color-border-secondary)",
            background: !n.read ? "rgba(245, 158, 11, 0.04)" : "transparent",
            cursor: "pointer",
          }}
        >
          <Badge count={typeIcon[n.type]} offset={[-4, 32]}>
            <Avatar src={n.user.avatar} size={40} />
          </Badge>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, lineHeight: 1.4 }}>
              <Text strong>{n.user.name}</Text>{" "}
              <Text type="secondary">{n.message}</Text>
              {n.project && <Text strong> {n.project}</Text>}
            </div>
            <Text type="secondary" style={{ fontSize: 11, fontFamily: "JetBrains Mono, monospace" }}>{n.time}</Text>
          </div>
          {!n.read && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#F59E0B", marginTop: 8 }} />}
        </div>
      ))}
    </div>
  );
}

export function NotificationDropdown() {
  const [open, setOpen] = useState(false);
  const unreadCount = mockNotifications.filter((n) => !n.read).length;
  const unread = mockNotifications.filter((n) => !n.read);

  const content = (
    <div style={{ width: 380, background: "var(--hw-color-bg-elevated)", border: "1px solid var(--hw-color-border)", borderRadius: 12, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
      <div style={{ padding: "16px 16px 0" }}>
        <Text strong style={{ fontSize: 15, fontFamily: "JetBrains Mono, monospace" }}>Notifications</Text>
      </div>
      <Tabs
        defaultActiveKey="all"
        size="small"
        style={{ padding: "0 16px" }}
        items={[
          { key: "all", label: `All (${mockNotifications.length})`, children: <NotificationList items={mockNotifications} /> },
          { key: "unread", label: `Unread (${unread.length})`, children: <NotificationList items={unread} /> },
        ]}
      />
      <div style={{ padding: 12, borderTop: "1px solid var(--hw-color-border-secondary)", textAlign: "center" }}>
        <Button type="link" size="small">View all notifications</Button>
      </div>
    </div>
  );

  return (
    <Dropdown
      open={open}
      onOpenChange={setOpen}
      trigger={["click"]}
      placement="bottomRight"
      dropdownRender={() => content}
    >
      <span style={{ display: "inline-flex" }}>
        <Badge count={unreadCount} size="small">
          <Button type="text" shape="circle" icon={<BellOutlined style={{ fontSize: 18 }} />} />
        </Badge>
      </span>
    </Dropdown>
  );
}
