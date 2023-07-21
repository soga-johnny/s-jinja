const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "YYYY年MM月DD日",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
};

export default post;
