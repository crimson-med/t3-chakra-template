import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Link from "next/link";
import { api } from "~/utils/api";
import { Link } from "@chakra-ui/next-js";
import {
  Text,
  Box,
  Heading,
  Grid,
  Image,
  Spinner,
  SpaceProps,
  HStack,
  useColorModeValue,
  Container,
  Tag,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Post } from "@prisma/client";
import { createShortText } from "~/utils/formater";

const generatePostLink = (id: String) => {
  return `/post/${id}`;
};

const Post: NextPage = () => {
  const router = useRouter();
  // return <p>Post: {router.query.id}</p>;
  //   const search = searchParams.get('search');
  //   const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data: sessionData } = useSession();

  if (!router?.query?.id) {
    return <>Error page</>;
  }

  const { data: post, isLoading } = api.post.one.useQuery({
    id: router.query.id.toString(),
  });

  if (!post) {
    return <>Error page</>;
  }

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Heading
          textAlign={"center"}
          margin={10}
          as={"h1"}
          size={"4xl"}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]"
        >
          <span className="text-[hsl(280,100%,70%)]">{post.title}</span>
        </Heading>
        <Container minH={"100vh"} maxW={"7xl"} p="12" paddingTop={0}>
          <Flex flexDirection={"column"} alignItems={"center"}>
            <BlogAuthor
              name={post?.author?.name || "John Doe"}
              date={new Date(post.createdAt)}
            />
            <Box flex={1}>{post.content}</Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Post;

interface PostListProps {
  posts: Post[] | undefined | null;
}

export const PostList = ({ posts }: PostListProps) => {
  if (posts) {
    return (
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        {posts.map((post) => (
          <Box
            display="flex"
            flexDirection={{ base: "column", sm: "row" }}
            flex="1"
            marginBottom={6}
            paddingBottom={6}
            position="relative"
            alignItems={["flex-start"]}
            minW={"80%"}
            borderBottom={"solid thin rgba(221, 107, 32, 0.6)"}
          >
            <Box
              flex={1}
              width={{ base: "100%", sm: "85%" }}
              margin={["0", "0px 5%"]}
            >
              <Link
                href={generatePostLink(post.id)}
                textDecoration="none"
                _hover={{ textDecoration: "none" }}
              >
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>

            <Box
              display="flex"
              flex={2}
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: "3", sm: "0" }}
            >
              <BlogTags tags={["Engineering", "Product"]} />
              <Heading marginTop="1">
                <Link
                  href={generatePostLink(post.id)}
                  textDecoration="none"
                  _hover={{ textDecoration: "none" }}
                >
                  {post.title}
                </Link>
              </Heading>
              <Text
                as="p"
                marginTop="2"
                color={useColorModeValue("gray.700", "gray.200")}
                fontSize="lg"
              >
                {createShortText(post.content)}
              </Text>
              <Link
                width={"50%"}
                margin={"10px 0px"}
                size={"sm"}
                variant={"outline"}
                colorScheme="red"
                as={"button"}
                href={generatePostLink(post.id)}
                display={"inline-block"}
              >
                Read More
              </Link>
              <BlogAuthor
                name="John Doe"
                date={new Date("2021-04-06T19:01:27Z")}
              />
            </Box>
          </Box>
        ))}
      </Box>
    );
  } else {
    return <>No posts to display</>;
  }
};

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};
