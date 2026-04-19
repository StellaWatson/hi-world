import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Input, Avatar, Tabs, Space, Typography, Button, Drawer } from "antd";
import {
  SearchOutlined,
  FireOutlined,
  ClockCircleOutlined,
  RiseOutlined,
  ThunderboltOutlined,
  MenuOutlined,
  PlusOutlined,
  CodeOutlined,
} from "@ant-design/icons";
import { Sidebar } from "@/components/Sidebar";
import { WelcomeModal } from "@/components/WelcomeModal";
import { PostCard } from "@/components/PostCard";
import { FeaturedDevs } from "@/components/FeaturedDevs";
import { PopularCreators } from "@/components/PopularCreators";
import { LeaderboardSidebar } from "@/components/LeaderboardSidebar";
import { CreatePostDialog } from "@/components/CreatePostDialog";
import { NotificationDropdown } from "@/components/NotificationDropdown";
import { mockPosts } from "@/lib/mockData";

const { Header, Content } = Layout;
const { Text, Title } = Typography;

const filterTabs = [
  { key: "trending", label: <Space size={6}><FireOutlined />Trending</Space> },
  { key: "latest", label: <Space size={6}><ClockCircleOutlined />Latest</Space> },
  { key: "top", label: <Space size={6}><RiseOutlined />Top</Space> },
  { key: "foryou", label: <Space size={6}><ThunderboltOutlined />For You</Space> },
];

export default function Feed() {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [createOpen, setCreateOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--hw-color-bg-layout)" }}>
      <Sidebar onCreatePost={() => setCreateOpen(true)} />

      <Layout style={{ background: "transparent" }}>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "rgba(15, 15, 20, 0.85)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid var(--hw-color-border-secondary)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "0 24px",
          }}
        >
          {/* Mobile: menu + logo */}
          <Space className="lg:hidden" style={{ display: "flex" }}>
            <Button type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #F59E0B, #F97316)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CodeOutlined style={{ color: "#0A0A0F", fontSize: 14 }} />
              </div>
            </Link>
          </Space>

          <Title level={4} style={{ margin: 0, fontFamily: "JetBrains Mono, monospace", display: "none" }} className="sm:!block">
            Home
          </Title>

          <div style={{ flex: 1, maxWidth: 480, marginLeft: "auto" }}>
            <Input
              size="large"
              placeholder="Search projects, developers..."
              prefix={<SearchOutlined style={{ color: "var(--hw-color-text-tertiary)" }} />}
              style={{ borderRadius: 10 }}
            />
          </div>

          <Space size="small">
            <NotificationDropdown />
            <Link to="/profile">
              <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" shape="square" style={{ borderRadius: 8 }} />
            </Link>
          </Space>
        </Header>

        <Drawer
          placement="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          width={280}
          styles={{ body: { padding: 16 } }}
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Button type="primary" block icon={<PlusOutlined />} onClick={() => { setCreateOpen(true); setDrawerOpen(false); }}>
              New Project
            </Button>
            {[
              { label: "Home", path: "/feed" },
              { label: "Leaderboard", path: "/leaderboard" },
              { label: "Profile", path: "/profile" },
              { label: "Settings", path: "/settings" },
            ].map((i) => (
              <Link key={i.path} to={i.path} onClick={() => setDrawerOpen(false)}>
                <Button type="text" block style={{ textAlign: "left", justifyContent: "flex-start" }}>
                  {i.label}
                </Button>
              </Link>
            ))}
          </Space>
        </Drawer>

        <Content style={{ padding: "24px", maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 320px", gap: 32 }} className="feed-grid">
            <div>
              {/* Featured devs */}
              <div style={{ marginBottom: 24 }}>
                <Text type="secondary" style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 600, letterSpacing: 0.5, textTransform: "uppercase" }}>
                  Featured Developers
                </Text>
                <div style={{ marginTop: 12 }}>
                  <FeaturedDevs />
                </div>
              </div>

              {/* Filter tabs */}
              <Tabs
                activeKey={activeFilter}
                onChange={setActiveFilter}
                items={filterTabs}
                size="large"
                style={{ marginBottom: 16 }}
              />

              {/* Posts */}
              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                {mockPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </Space>
            </div>

            <aside className="feed-aside">
              <div style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 24 }}>
                <PopularCreators />
                <LeaderboardSidebar />
              </div>
            </aside>
          </div>
        </Content>
      </Layout>

      <style>{`
        @media (max-width: 1200px) {
          .feed-aside { display: none; }
          .feed-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
      <WelcomeModal />
    </Layout>
  );
}
