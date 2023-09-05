"use client";

import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  CardCover,
  Link,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { Book } from "../../../repositories/types/book";
import { getBookUsecase } from "../../../usecases/album/get-book.usecase";
import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

const BookDetail = ({ params }: Props) => {
  const [book, setBook] = useState<Book>({
    author: "",
    image: "",
    title: "",
  });
  const getBook = async (id: string) => {
    const result = await getBookUsecase.execute(id);
    setBook(result);
    console.log("🚀 ~ file: page.tsx:15 ~ getBook ~ result:", result);
  };
  useEffect(() => {
    getBook(params.id);
  }, [params.id]);

  if (!book.title) return <></>;

  return (
    <main className={styles.main}>
      <Card
        sx={{
          width: 300,
          bgcolor: "initial",
          boxShadow: "none",
          "--Card-padding": "0px",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <AspectRatio ratio="4/3">
            <figure>
              <img
                src={book.image}
                loading="lazy"
                alt="Yosemite by Casey Horner"
              />
            </figure>
          </AspectRatio>
          <CardCover
            className="gradient-cover"
            sx={{
              "&:hover, &:focus-within": {
                opacity: 1,
              },
              opacity: 0,
              transition: "0.1s ease-in",
              background:
                "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
            }}
          >
            {/* The first box acts as a container that inherits style from the CardCover */}
            <div>
              <Box
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                <Typography level="h2" noWrap sx={{ fontSize: "lg" }}>
                  <Link
                    href="#dribbble-shot"
                    overlay
                    underline="none"
                    sx={{
                      color: "#fff",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      display: "block",
                    }}
                  >
                    {book.author}
                  </Link>
                </Typography>
              </Box>
            </div>
          </CardCover>
        </Box>
        <CardContent>
          {/* <Avatar
            src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
            size="sm"
            sx={{ "--Avatar-size": "1.5rem" }}
          /> */}
          <Typography level="title-md">{book.title}</Typography>
        </CardContent>
      </Card>
    </main>
  );
};

export default BookDetail;
