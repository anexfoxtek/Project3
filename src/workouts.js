import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreator from "../../Store/action/index";
import WorkoutCard from "../card";

class Workouts extends Component {
  componentDidMount() {
    this.props.initializeWorkouts();
  }
  render() {
    // workout array: has list of workouts with unique key
    // workout-keys: array of Keys

    const workoutArray = this.props.workouts;
    const workoutKeys = workoutArray && Object.keys(workoutArray);
    let workoutList = null;
    if (workoutKeys) {
      // WORKOUT-List: array of ReactNode single workout
      workoutList = workoutKeys.map((key, index) => {
        const workout = Object.entries(workoutArray[key])[0];
        const Reps_x_Sets = Object.entries(workoutArray[key])[1];
        return (
          <WorkoutCard
            key={`${key}_${index}`}
            title={workout}
            description={Reps_x_Sets}
          />
        );
      });
    }

    return <div className="Container">{workoutList}</div>;
  }
}

const mapStateToProps = state => {
  return {
    workouts: state.workoutReducer.data,
    loaded: state.workoutReducer.loaded,
    loading: state.workoutReducer.loading,
    error: state.workoutReducer.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    initializeWorkouts: () => dispatch(actionCreator.initWorkoutAsync())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Workouts);
