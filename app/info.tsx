import me from "./avatar.png";

export const name = "Xavier Tarazona";
export const title = "full-stack developer";
export const avatar = me;

export const about = () => {
  return (
    <>
      I'm {name}, a <span className="text-white">{title}</span>{" "}
      passionate about software, technology and engineering.
    </>
  );
};

export const bio = () => {
  return (
    <>
      I love building modern, fast and scalable products that{" "}
      <span className="text-white">engage</span> users.
    </>
  );
};
