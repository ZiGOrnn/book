"use client";

import { Add } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import CreateBook from "../components/CreateBook";
import AuthGuard from "../guard/auth.guard";
import { Book } from "../repositories/types/book";
import { getBooksUsecase } from "../usecases/album/get-books.usecase";
import styles from "./page.module.css";

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    getBooksUsecase.execute((data) => {
      setBooks((v) => [
        ...v,
        {
          key: data.key,
          ...data.val(),
        },
      ]);
    });
  }, []);
  return (
    <AuthGuard>
      <main className={styles.main}>
        <Button
          style={{ marginBottom: "18px" }}
          variant="outlined"
          color="neutral"
          startDecorator={<Add />}
          onClick={() => setOpen(true)}
        >
          Create Book
        </Button>
        {books.map((book) => (
          <BookCard key={book.key} data={book} />
        ))}
        <CreateBook open={open} setOpen={setOpen} />
      </main>
    </AuthGuard>
  );
}
