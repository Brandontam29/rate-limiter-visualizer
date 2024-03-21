import figlet from "figlet";

const textToGhostFont = (text: string) =>
  figlet.text(
    text,
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("textToGhostFont went wrong...");
        return;
      }
      console.log(data);
    }
  );

export default textToGhostFont;
