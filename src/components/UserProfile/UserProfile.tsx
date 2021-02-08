// Import modules
import React from "react";
import { useDispatch, connect } from "react-redux";

import { UserData } from "store/types";

// Import actions
import { getUser } from "../../store/actions/userActions";

interface UserProps {
  data: UserData;
}

// class UserProfile extends React.Component<UserProps> {
//   dispatch = useDispatch();

//   constructor(props: UserProps) {
//     super(props);
//   }

//   componentDidMount(): void {
//     this.dispatch(getUser());
//   }

//   render(): JSX.Element {
//     return (
//       <div>
//         <h1>Benutzername: {this.props.data.username}</h1>
//       </div>
//     );
//   }
// }

function UserProfile(props: UserProps): JSX.Element {
  const dispatch = useDispatch();
  dispatch(getUser());
  return (
    <div>
      <h1>Benutzername: {props.data.username}</h1>
      <h1>E-Mail: {props.data.email}</h1>
    </div>
  );
}

function mapStateToProps(state: UserData): UserProps {
  return {
    data: {
      username: state.username,
      email: state.email,
    },
  };
}

export default connect(mapStateToProps)(UserProfile);

// export default UserProfile;
