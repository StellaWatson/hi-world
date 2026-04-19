import { Link, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu, Button, Avatar, Badge, Typography, Space } from "antd";
import {
  HomeOutlined,
  CompassOutlined,
  TrophyOutlined,
  MessageOutlined,
  UserOutlined,
  SettingOutlined,
  PlusOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { Text } = Typography;

const navItems = [
  { key: "/feed", icon: <HomeOutlined />, label: "Home" },
  { key: "/explore", icon: <CompassOutlined />, label: "Explore" },
  { key: "/leaderboard", icon: <TrophyOutlined />, label: "Leaderboard" },
  { key: "/messages", icon: <MessageOutlined />, label: "Messages" },
  { key: "/profile", icon: <UserOutlined />, label: "My Profile" },
  { key: "/settings", icon: <SettingOutlined />, label: "Settings" },
];

export function Sidebar({ onCreatePost }: { onCreatePost?: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sider
      width={240}
      breakpoint="lg"
      collapsedWidth={0}
      trigger={null}
      style={{
        height: "100vh",
        position: "sticky",
        top: 0,
        left: 0,
        borderRight: "1px solid var(--hw-color-border-secondary)",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", marginBottom: 20 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "linear-gradient(135deg, #F59E0B, #F97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CodeOutlined style={{ color: "#0A0A0F", fontSize: 18 }} />
          </div>
          <Text strong style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 17 }}>
            Hello<span style={{ color: "#F59E0B" }}>World</span>
          </Text>
        </Link>

        {/* Nav */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={navItems.map((i) => ({
            key: i.key,
            icon: i.icon,
            label:
              i.key === "/messages" ? (
                <Space>
                  <span>{i.label}</span>
                  <Badge count={3} size="small" />
                </Space>
              ) : (
                i.label
              ),
          }))}
          onClick={({ key }) => navigate(key)}
          style={{ background: "transparent", border: "none", flex: 1 }}
        />

        {/* Create Post */}
        {onCreatePost && (
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onCreatePost}
            block
            size="large"
            style={{ marginBottom: 16, fontWeight: 600 }}
          >
            New Project
          </Button>
        )}

        {/* User */}
        <Link
          to="/profile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 8,
            borderTop: "1px solid var(--hw-color-border-secondary)",
            paddingTop: 16,
          }}
        >
          <Avatar size={36} src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" />
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: "var(--hw-color-text-base)" }}>Alex Chen</div>
            <div style={{ fontSize: 12, color: "var(--hw-color-text-tertiary)", fontFamily: "JetBrains Mono, monospace" }}>
              @alexdev
            </div>
          </div>
        </Link>
      </div>
    </Sider>
  );
}
