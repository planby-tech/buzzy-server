import TagService from "../../services/TagService.js";
import MeetingService from "../../services/MeetingService.js";

const tag = new TagService();
const meeting = new MeetingService();

const tagging = (req, res) => {
  const userId = req.userId;
  const groupId = req.params.groupId;
  const tagId = req.params.tagId;
  tag
    .tagging(userId, groupId, tagId)
    .then(({ tag, meeting, status }) => {
      if (status === 0 || status === 1) {
        res.json({
          message: "User tagged to the existing meeting!",
          tag: tag,
          meeting: meeting,
          status: status,
        });
      } else {
        req.body.tag = tag;
        req.body.meeting = meeting;
        newMeeting(req, res);
      }
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const newMeeting = (req, res) => {
  const groupId = req.params.groupId;
  const meetingDTO = req.body.meeting;
  meeting
    .createMeeting(groupId, meetingDTO)
    .then((meeting) => {
      res.json({
        message: "New meeting was created and user tagged to it!",
        tag: req.body.tag,
        meeting: meeting,
        status: 1,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

export { tagging };
