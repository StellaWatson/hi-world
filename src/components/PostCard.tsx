import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar, Tag, Button, Space, Typography, Input, Divider } from "antd";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  ShareAltOutlined,
  BookOutlined,
  MoreOutlined,
  GithubOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import type { Post } from "@/lib/mockData";

const { Text, Title, Paragraph } = Typography;

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(post.liked);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Card
      bordered
      styles={{ body: { padding: 0 } }}
      style={{ overflow: "hidden" }}
    >
      {/* Header */}
      <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to={`/profile/${post.username}`} style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar src={post.avatar} size={40} shape="square" style={{ borderRadius: 8 }} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{post.displayName}</div>
            <Text type="secondary" style={{ fontSize: 12, fontFamily: "JetBrains Mono, monospace" }}>
              @{post.username} · {post.createdAt}
            </Text>
          </div>
        </Link>
        <Button type="text" shape="circle" icon={<MoreOutlined />} />
      </div>

      {/* Image */}
      <Link to={`/post/${post.id}`} style={{ display: "block", position: "relative" }}>
        <img src={post.image} alt={post.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,15,0.85), transparent 50%)" }} />
        <Title level={4} style={{ position: "absolute", bottom: 16, left: 20, right: 20, margin: 0, color: "#fff", fontFamily: "JetBrains Mono, monospace" }}>
          {post.title}
        </Title>
      </Link>

      {/* Body */}
      <div style={{ padding: "16px 20px" }}>
        <Space size={[6, 6]} wrap style={{ marginBottom: 12 }}>
          {post.tools.map((tool) => (
            <Tag key={tool} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, margin: 0 }}>
              {tool}
            </Tag>
          ))}
        </Space>

        <Paragraph type="secondary" style={{ marginBottom: 12, fontSize: 14 }} ellipsis={{ rows: 2 }}>
          {post.description}
        </Paragraph>

        <Space size="middle">
          {post.githubLink && (
            <Button type="link" size="small" icon={<GithubOutlined />} href={post.githubLink} target="_blank" style={{ padding: 0, fontFamily: "JetBrains Mono, monospace" }}>
              Source
            </Button>
          )}
          {post.liveLink && (
            <Button type="link" size="small" icon={<LinkOutlined />} href={post.liveLink} target="_blank" style={{ padding: 0, fontFamily: "JetBrains Mono, monospace" }}>
              Live Demo
            </Button>
          )}
        </Space>
      </div>

      <Divider style={{ margin: 0 }} />

      {/* Actions */}
      <div style={{ padding: "10px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Space size={4}>
          <Button
            type="text"
            icon={liked ? <HeartFilled style={{ color: "#F59E0B" }} /> : <HeartOutlined />}
            onClick={handleLike}
            style={{ color: liked ? "#F59E0B" : undefined }}
          >
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>{likes}</span>
          </Button>
          <Button type="text" icon={<MessageOutlined />} onClick={() => setShowComments(!showComments)}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12 }}>{post.comments.length}</span>
          </Button>
          <Button type="text" icon={<ShareAltOutlined />} />
        </Space>
        <Button type="text" shape="circle" icon={<BookOutlined />} />
      </div>

      {/* Comments preview */}
      {showComments && (
        <div style={{ padding: "0 20px 16px", borderTop: "1px solid var(--hw-color-border-secondary)" }}>
          <div style={{ paddingTop: 12 }}>
            {post.comments.map((c) => (
              <div key={c.id} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <Avatar src={c.avatar} size={28} shape="square" style={{ borderRadius: 6 }} />
                <div style={{ flex: 1, background: "var(--hw-color-bg-elevated)", padding: "8px 12px", borderRadius: 8 }}>
                  <Space size={6}>
                    <Text strong style={{ fontSize: 12 }}>@{c.username}</Text>
                    <Text type="secondary" style={{ fontSize: 11 }}>{c.createdAt}</Text>
                  </Space>
                  <div style={{ fontSize: 13, marginTop: 2 }}>{c.text}</div>
                </div>
              </div>
            ))}
            <Input placeholder="Add a comment..." style={{ marginTop: 8 }} />
          </div>
        </div>
      )}
    </Card>
  );
}
