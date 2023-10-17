import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  inProgressBadge: {
    id: 'ora-grading.StatusAlert.inProgressBadge',
    defaultMessage: 'In Progress',
    description: 'Label for the in progress badge',
  },
  completedBadge: {
    id: 'ora-grading.StatusAlert.completedBadge',
    defaultMessage: 'Completed',
    description: 'Label for the completed badge',
  },
  closedBadge: {
    id: 'ora-grading.StatusAlert.closedBadge',
    defaultMessage: 'Incomplete',
    description: 'Label for the incomplete badge',
  },
  cancelledBadge: {
    id: 'ora-grading.StatusAlert.cancelledBadge',
    defaultMessage: 'Cancelled',
    description: 'Label for the cancelled badge',
  },
});

export const submission = defineMessages({
  inProgress: {
    id: 'ora-grading.StatusAlert.submission.inProgress',
    defaultMessage: "This assignment has several steps. In the first step you'll provide a response to the prompt.  The other steps appear below the Your Response field",
    description: 'Submission in-progress status alert',
  },
  finished: {
    id: 'ora-grading.StatusAlert.submission.finished',
    defaultMessage: 'Your response has been submitted.  You will receive your grade after all steps are complete and your response is fully assessed.',
    description: 'Submission finished status alert',
  },
  notAvailable: {
    id: 'ora-grading.StatusAlert.submission.notAvailable',
    defaultMessage: 'This task is not available yet.  Check back to complete the assignment once this section has opened',
    description: 'Submission not avilable status alert',
  },
  cancelled: {
    id: 'ora-grading.StatusAlert.submission.cancelled',
    defaultMessage: 'Your submission was cancelled on {cancelledAt}',
    description: 'Submission cancelled status alert',
  },
  cancelledBy: {
    id: 'ora-grading.StatusAlert.submission.cancelledBy',
    defaultMessage: 'Your submission was cancelled by {cancelledBy} on {cancelledAt}',
    description: 'Submission cancelled by user status alert',
  },
  closed: {
    id: 'ora-grading.StatusAlert.submission.closed',
    defaultMessage: 'The due date for this step has passed. This step is now closed. You can no longer submit a response or continue with this problem, and you will receive a grade of incomplete. If you saved but did not submit a response, the response appears in the course records.',
    description: 'Submission closed status alert',
  },
  teamAlreadySubmitted: {
    id: 'ora-grading.StatusAlert.submission.teamAlreadySubmitted',
    defaultMessage: '<Submission Team-Already-Submitted status alert: TODO>',
    description: 'Submission team-already-submitted status alert',
  },
  needTeam: {
    id: 'ora-grading.StatusAlert.submission.needTeam',
    defaultMessage: '<Submission Need-Team status alert: TODO>',
    description: 'Submission need-team status alert',
  },
});

export const studentTraining = defineMessages({
  inProgress: {
    id: 'ora-grading.StatusAlert.studentTraining.inProgress',
    defaultMessage: 'This assignment is in progress. Complete the learner training step to move on.',
    description: 'Student Training in progress status alert',
  },
});

export const self = defineMessages({
  inProgress: {
    id: 'ora-grading.StatusAlert.self.inProgress',
    defaultMessage: 'This assignment is in progress. You still need to complete the self assessment step.',
    description: 'Student Training in progress status alert',
  },
  closed: {
    id: 'ora-grading.StatusAlert.self.closed',
    defaultMessage: 'The due date for this step has passed. This step is now closed. You can no longer complete a self assessment or continue with this asseignment, and you will receive a grade of inccomplete',
    description: 'Student Training closed status alert',
  },
});

export const peer = defineMessages({
  inProgress: {
    id: 'ora-grading.StatusAlert.peer.inProgress',
    defaultMessage: 'This assignment is in progress. You still need to complete the peer assessment step.',
    description: 'Peer Assessment closed status alert',
  },
  waiting: {
    id: 'ora-grading.StatusAlert.peer.waiting',
    defaultMessage: 'All submitted responses have been assessed.  Check back later to see if more learners have submitted responses.',
    description: 'Peer Assessment waiting status alert',
  },
  finished: {
    id: 'ora-grading.StatusAlert.peer.finished',
    defaultMessage: 'You have successfully completed all of the required eer assessments for this assignment. You may assess additional peer responses if you want to.  Completed additional assessments will no affect your grade.',
    description: 'Peer Assessment finished status alert',
  },
  closed: {
    id: 'ora-grading.StatusAlert.peer.closed',
    defaultMessage: 'The due date for this step has passed. This step is now closed. You can no longer complete peer assessments or continue with this assignment, and you will receive a grade of incomplete.',
    description: 'Peer Assessment closed status alert',
  },
});

export const done = defineMessages({
  status: {
    id: 'ora-grading.StatusAlert.done',
    defaultMessage: 'You have completed this assignment. Review your grade and your assessment details',
    description: 'Done status alert',
  },
});

export default {
  ...messages,
  submission,
  studentTraining,
  self,
  peer,
  done,
};
