import ImageService from "../../services/ImageService.js";

const image = new ImageService();

const uploadPost = (req, res) => {
  const postId = req.params.postId;
  const imageDTO = req.files;
  image
    .uploadPost(postId, imageDTO)
    .then((images) => {
      res.json({
        message: "Images were uploaded successfully!",
        images: images,
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

const readPost = (req, res) => {
  const groupId = req.params.groupId;
  const flowerId = req.params.flowerId;
  image
    .readPost(groupId, flowerId)
    .then((images) => {
      res.json(images);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

export { uploadPost, readPost };
