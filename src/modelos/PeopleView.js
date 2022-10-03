class PeopleView {
    constructor(id, questions, answers, userId) {
      this.id = id;
      this.questions = questions;
      this.answers = answers;
      this.userId = userId;
    }
  }
  module.exports = {
    PeopleView: PeopleView,
  };