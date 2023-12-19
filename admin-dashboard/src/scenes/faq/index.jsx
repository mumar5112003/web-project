import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

// Define the FAQ data as a JSON object
const faqData = [
  {
    question: "What is our software company all about?",
    answer:
      "Our software company specializes in developing cutting-edge software solutions for a wide range of industries.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through our contact page or by emailing support@company.com.",
  },
  {
    question: "Do you offer custom software development services?",
    answer:
      "Yes, we offer custom software development services tailored to your specific needs.",
  },
  {
    question: "What programming languages do you use?",
    answer:
      "We work with a variety of programming languages, including JavaScript, Python, and Java, to name a few.",
  },
  {
    question: "How can I join your software development team?",
    answer:
      "We frequently hire talented developers. Check our careers page for current job openings.",
  },
];

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {faqData.map((item, index) => (
        <Accordion key={index} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
