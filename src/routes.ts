export default {
  xblockEmbed: 'xblock/embedded/:courseId/:xblockId/:progressKey',
  peerAssessmentEmbed: 'peer_assessment/embedded/:courseId/:xblockId/:progressKey?',
  selfAssessmentEmbed: 'self_assessment/embedded/:courseId/:xblockId/:progressKey?',
  studentTrainingEmbed: 'student_training/embedded/:courseId/:xblockId/:progressKey?',
  submissionEmbed: 'submission/embedded/:courseId/:xblockId/:progressKey?',
  rootEmbed: 'embedded/*',
  xblock: 'xblock/:courseId/:xblockId/:progressKey?',
  peerAssessment: 'peer_assessment/:courseId/:xblockId/:progressKey?',
  selfAssessment: 'self_assessment/:courseId/:xblockId/:progressKey?',
  studentTraining: 'student_training/:courseId/:xblockId/:progressKey?',
  submission: 'submission/:courseId/:xblockId/:progressKey?',
  root: '/*',
};
