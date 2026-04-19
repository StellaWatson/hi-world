import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout, Input, Avatar, Tabs, Space, Typography, Button, Drawer, Grid } from "antd";
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
const { useBreakpoint } = Grid;

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
  const screens = useBreakpoint();

  // antd breakpoints: xs<576, sm≥576, md≥768, lg≥992, xl≥1200, xxl≥1600
  const isDesktop = screens.lg; // ≥992: show sidebar
  const showRightRail = screens.xxl; // ≥1600: show right column comfortably
  const showSearch = screens.sm; // ≥576

  // Close drawer when crossing into desktop
  useEffect(() => {
    if (isDesktop && drawerOpen) setDrawerOpen(false);
  }, [isDesktop, drawerOpen]);

  return (
    <Layout style={{ minHeight: "100vh", background: "var(--hw-color-bg-layout)" }} hasSider>
      {isDesktop && <Sidebar onCreatePost={() => setCreateOpen(true)} />}

      <Layout style={{ background: "transparent", minWidth: 0 }}>
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
            gap: 12,
            padding: screens.md ? "0 24px" : "0 12px",
            height: 64,
          }}
        >
          {!isDesktop && (
            <>
              <Button type="text" icon={<MenuOutlined />} onClick={() => setDrawerOpen(true)} />
              <Link to="/" style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #F59E0B, #F97316)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CodeOutlined style={{ color: "#0A0A0F", fontSize: 14 }} />
                </div>
              </Link>
            </>
          )}

          {isDesktop && (
            <Title level={5} style={{ margin: 0, fontFamily: "JetBrains Mono, monospace" }}>
              Home
            </Title>
          )}

          <div style={{ flex: 1, maxWidth: 480, marginLeft: "auto", minWidth: 0 }}>
            {showSearch && (
              <Input
                size="large"
                placeholder={screens.md ? "Search projects, developers..." : "Search..."}
                prefix={<SearchOutlined style={{ color: "var(--hw-color-text-tertiary)" }} />}
              />
            )}
          </div>

          <Space size="small">
            {!showSearch && <Button type="text" shape="circle" icon={<SearchOutlined />} />}
            <NotificationDropdown />
            <Link to="/profile">
              <Avatar
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop"
                shape="square"
                size={36}
                style={{ borderRadius: 8 }}
              />
            </Link>
          </Space>
        </Header>

        <Drawer
          placement="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          width={280}
          styles={{ body: { padding: 16 } }}
          title={
            <Space>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: "linear-gradient(135deg, #F59E0B, #F97316)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CodeOutlined style={{ color: "#0A0A0F", fontSize: 14 }} />
              </div>
              <span style={{ fontFamily: "JetBrains Mono, monospace" }}>HelloWorld</span>
            </Space>
          }
        >
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <Button type="primary" block icon={<PlusOutlined />} onClick={() => { setCreateOpen(true); setDrawerOpen(false); }}>
              New Project
            </Button>
            {[
              { label: "Home", path: "/feed" },
              { label: "Explore", path: "/explore" },
              { label: "Leaderboard", path: "/leaderboard" },
              { label: "Messages", path: "/messages" },
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

        <Content
          style={{
            padding: screens.md ? "24px" : "16px 12px",
            maxWidth: 1280,
            width: "100%",
            margin: "0 auto",
            minWidth: 0,
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: showRightRail ? "minmax(0, 1fr) 320px" : "minmax(0, 1fr)",
              gap: 24,
            }}
          >
            <div style={{ minWidth: 0 }}>
              {/* Featured devs */}
              <div style={{ marginBottom: 20 }}>
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
                size={screens.md ? "large" : "middle"}
                style={{ marginBottom: 8 }}
              />

              {/* Posts */}
              <Space direction="vertical" size="large" style={{ width: "100%" }}>
                {mockPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </Space>
            </div>

            {showRightRail && (
              <aside style={{ minWidth: 0 }}>
                <div style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 24 }}>
                  <PopularCreators />
                  <LeaderboardSidebar />
                </div>
              </aside>
            )}
          </div>
        </Content>
      </Layout>

      <CreatePostDialog open={createOpen} onOpenChange={setCreateOpen} />
      <WelcomeModal />
    </Layout>
  );
}
