import PropTypes from "prop-types";
import * as S from "./styles.js";

export const ButtonLink = ({
  text,
  theme,

  linkTo,
  children,
  ...props
}) => {
  return (
    <S.StyledButton theme={theme} {...props} to={linkTo}>
      {text} {children}
    </S.StyledButton>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.oneOf(["primary", "secondary", "default", "confirm"]),
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};
