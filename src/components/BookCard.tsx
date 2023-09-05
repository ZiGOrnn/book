import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from "@mui/joy";
import { useRouter } from "next/navigation";
import { Book } from "../repositories/types/book";
import { Path } from "../types/path";

type Props = {
  data: Book;
};

const BookCard = ({ data }: Props) => {
  const router = useRouter();

  return (
    <Card
      variant="outlined"
      sx={{ width: 320, marginBottom: "18px", cursor: "pointer" }}
      onClick={() => {
        if (data.key) router.push(Path.Book.replace(":id", data.key));
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="1">
          <img src={data.image} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{data.title}</Typography>
        <Typography level="body-sm">{data.author}</Typography>
      </CardContent>
      {/* <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            6.3k views
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            fontWeight="md"
            textColor="text.secondary"
          >
            1 hour ago
          </Typography>
        </CardContent>
      </CardOverflow> */}
    </Card>
  );
};

export default BookCard;
