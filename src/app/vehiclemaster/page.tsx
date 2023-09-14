"use client";
import { Content } from "../components/content/content";
import ProfileLayout from "../profile/page";

interface ChildrenProps {
  children: React.ReactNode;
}

export default function ProjectsPage() {
  return (
    <ProfileLayout>
      <Content title="Arun"></Content>
    </ProfileLayout>
  );
}
