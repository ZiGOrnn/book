"use client";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalDialog,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from "@mui/joy";
import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Context } from "../context/store";
import { Book } from "../repositories/types/book";
import { createBookUsecase } from "../usecases/album/create-book.usecase";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const CreateBook = ({ open, setOpen }: Props) => {
  const { state, dispatch } = useContext(Context);
  const [book, setBook] = useState<Book>({
    title: "",
    author: "",
    image: "",
  });

  const create = async () => {
    const result = await createBookUsecase.execute(book);
    if (result) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (state.profile) {
      setBook((v) => ({ ...v, author: state.profile.username }));
    }
    return () => {};
  }, [state]);

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog
        aria-labelledby="basic-modal-dialog-title"
        aria-describedby="basic-modal-dialog-description"
        sx={{ maxWidth: 500 }}
      >
        <Typography id="basic-modal-dialog-title" level="h2">
          Create new project
        </Typography>
        <Typography id="basic-modal-dialog-description">
          Fill in the information of the project.
        </Typography>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            create();
          }}
        >
          <Stack spacing={2}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                autoFocus
                required
                value={book.title}
                onChange={(e) =>
                  setBook((v) => ({ ...v, title: e.target.value }))
                }
              />
            </FormControl>
            <Button
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={
                <SvgIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                </SvgIcon>
              }
            >
              Upload a file
              <VisuallyHiddenInput
                type="file"
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  const file = event.target.files?.item(0);
                  if (file) {
                    console.log(file);
                    setBook((v) => ({ ...v, file: file }));

                    // let data = new FormData();
                    // data.append('file', file);
                    // axios.post('/files', data)...
                  }
                }}
              />
            </Button>
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </ModalDialog>
    </Modal>
  );
};

export default CreateBook;
