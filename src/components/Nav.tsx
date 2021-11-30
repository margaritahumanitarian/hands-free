import { NavBar, ActionButton } from './NavUI';

interface Props {
  appStateChange: () => void;
  buttonName: string | undefined;
}

const Nav = ({ appStateChange, buttonName }: Props) => {
  return (
    <NavBar>
      <ActionButton
        aria-label={buttonName}
        name="button"
        type="button"
        onClick={appStateChange}
        value={buttonName}
      />
    </NavBar>
  );
};

export default Nav;
