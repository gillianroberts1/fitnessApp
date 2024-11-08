/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import BodyPart from "./BodyPart";


// eslint-disable-next-line react/prop-types
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
);

export default HorizontalScrollbar;
