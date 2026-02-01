"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { api } from "@/lib/api";

export type Post = {
  _id: string;
  title: string;
  country: string;
  category: string;
  image?: string;
  comments: Comment[];
  createdAt: string;
};

type Comment = {
  _id?: string;
  text: string;
  author: string;
  createdAt: string;
};

type PostContextType = {
  southAmerica: any;
  northAmerica: any;
  europe: any;
  africa: any;
  australia: any;
  asia: any;
  allPosts: Post[];
  onePost: Post | null;
  isLoading: boolean;
  errorMessage: string | null;
  showOnePost: (id: string) => void;
};

const PostsContext = createContext<PostContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [onePost, setOnePost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      setIsLoading(true);
      setErrorMessage(null);

      try {
        const response = await api.get("/posts");
        setAllPosts(response.data);
      } catch (err: any) {
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  const showOnePost = async (id: string) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await api.get(`/posts/${id}`);
      setOnePost(response.data);
    } catch (err: any) {
      setErrorMessage(err.message || "Cannot load post");
    } finally {
      setIsLoading(false);
    }
  };

  const southAmerica = allPosts.filter(
    (item) => item.category === "south america",
  );

  const northAmerica = allPosts.filter(
    (item) => item.category === "north america",
  );

  const europe = allPosts.filter((item) => item.category === "europe");

  const africa = allPosts.filter((item) => item.category === "africa");

  const australia = allPosts.filter((item) => item.category === "australia");

  const asia = allPosts.filter((item) => item.category === "asia");

  return (
    <PostsContext.Provider
      value={{
        southAmerica,
        northAmerica,
        europe,
        africa,
        australia,
        asia,
        allPosts,
        onePost,
        isLoading,
        errorMessage,
        showOnePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export const usePosts = (): PostContextType => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used inside PostsProvider");
  }
  return context;
};
