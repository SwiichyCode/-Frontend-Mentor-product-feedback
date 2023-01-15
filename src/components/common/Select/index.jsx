import PropTypes from "prop-types";
import { useToggle } from "../../../hooks/useToggle";
import { useDetectClickOutside } from "react-detect-click-outside";
import { Container, CustomSelect } from "./style";
import iconChevronDown from "../../../assets/shared/icon-arrow-down.svg";
import iconChevronUp from "../../../assets/shared/icon-arrow-up.svg";
import iconCheck from "../../../assets/shared/icon-check.svg";

export const Select = ({
  label,
  name,
  options,
  setOptions,
  currentOption,
  setCurrentOption,
  register,
}) => {
  const [open, setOpen] = useToggle(false);
  const ref = useDetectClickOutside({ onTriggered: () => setOpen(false) });

  const handleClick = (e) => {
    setOptions((prev) =>
      prev.map((option) => {
        if (option.name === e.target.value) {
          return {
            ...option,
            selected: true,
          };
        } else {
          return {
            ...option,
            selected: false,
          };
        }
      })
    );

    setCurrentOption(e.target.value);
    setOpen(false);
  };

  return (
    <Container open={open}>
      {label && <label className="select-label">{label}</label>}

      <CustomSelect
        className="current-select"
        type="button"
        value={currentOption}
        {...register(name)}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((prev) => !prev);
        }}
        open={open}
      >
        <span>{currentOption}</span>
        {open ? (
          <img src={iconChevronUp} alt="chevron-icon" />
        ) : (
          <img src={iconChevronDown} alt="chevron-icon" />
        )}
      </CustomSelect>

      {open && (
        <ul ref={ref} role="listbox" tabIndex={-1}>
          {options.map(({ name, selected }, index) => {
            // Need to refactor this for better accessibility
            return (
              <option
                value={name}
                key={index}
                id={name}
                onClick={(e) => handleClick(e)}
              >
                {name}

                {selected && <img src={iconCheck} alt="icon-check" />}
              </option>
            );
          })}
        </ul>
      )}
    </Container>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  currentItem: PropTypes.string,
};
