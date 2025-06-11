import React from "react";

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Grid,
  Icon,
} from "@/once-ui/components";

import { baseURL, routes } from "@/app/resources";
import { home, about, person, newsletter } from "@/app/resources/content";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { Projects } from "@/components/work/Projects";
import NowPlaying from "@/components/SpotifyNowPlaying";
import GitHubActivity from "@/components/GitHubActivity";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Column gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Flex fillWidth gap="xl">
        <Column as="section" fillWidth paddingY="l" gap="m">
          <Column maxWidth="s" gap="m">
            <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
              <Heading wrap="balance" variant="display-strong-m">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-l">
                {home.subline}
              </Text>
            </RevealFx>
            <RevealFx translateY="12" delay={0.4} horizontal="start">
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="secondary"
                size="m"
                arrowIcon
              >
                <Flex gap="8" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{ marginLeft: "-0.75rem", marginRight: "0.25rem" }}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </RevealFx>
          </Column>
        </Column>

        <Column
          gap="m"
          padding="m"
          radius="l"
          border="neutral-alpha-medium"
          style={{ minWidth: "20rem" }}
        >
          <Text variant="label-strong-s" onBackground="neutral-weak">
            Now playing on Spotify
          </Text>
          <NowPlaying />
          <GitHubActivity />
        </Column>
      </Flex>
      <Grid columns="2" mobileColumns="1" fillWidth gap="m">
        {/* Latest Projects */}
        <Flex
          direction="column"
          border="neutral-alpha-medium"
          radius="l"
          padding="l"
          gap="m"
        >
          <Heading as="h2" variant="heading-strong-s">
            Latest Projects
          </Heading>
          <Projects range={[1, 1]} columns="1" />
          <Button href="/work" variant="secondary" size="s" suffixIcon="arrowRight">
            All projects
          </Button>
        </Flex>
        {/* Latest Blog */}
        <Flex
          direction="column"
          border="neutral-alpha-medium"
          radius="l"
          padding="l"
          gap="m"
        >
          <Heading as="h2" variant="heading-strong-s">
            Latest from the blog
          </Heading>
          <Posts range={[1, 1]} columns="1" />
          <Button href="/blog" variant="secondary" size="s" suffixIcon="arrowRight">
            All blog posts
          </Button>
        </Flex>
        {/* AI Chat */}
        <Flex
          direction="column"
          border="neutral-alpha-medium"
          radius="l"
          padding="l"
          gap="m"
          vertical="space-between"
        >
          <Column gap="m">
            <Icon name="sparkle" size="l" onBackground="neutral-weak" />
            <Heading as="h2" variant="heading-strong-s">
              Chat with me
            </Heading>
            <Text onBackground="neutral-weak">
              Ask my AI assistant about my career, projects, and more.
            </Text>
          </Column>
          <Button href="/chat" variant="secondary" size="s" suffixIcon="arrowRight">
            Start chatting
          </Button>
        </Flex>
        {/* Contact */}
        <Flex
          direction="column"
          border="neutral-alpha-medium"
          radius="l"
          padding="l"
          gap="m"
          vertical="space-between"
        >
          <Column gap="m">
            <Icon name="send" size="l" onBackground="neutral-weak" />
            <Heading as="h2" variant="heading-strong-s">
              Get in touch
            </Heading>
            <Text onBackground="neutral-weak">
              Have a question or a project in mind? Let's connect.
            </Text>
          </Column>
          <Button href="/contact" variant="secondary" size="s" suffixIcon="arrowRight">
            Contact me
          </Button>
        </Flex>
      </Grid>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}


