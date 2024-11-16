import { createClient, FieldsType } from "contentful";
interface responseEntry {
  sys: { id: string };
  fields: FieldsType;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONTMENT_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
});

export const getEntries = async (page: number) => {
  try {
    const response = await client.getEntries({
      content_type: "blog",
    });

    const blogs = response.items.map((blog: responseEntry) => {
      return {
        entryId: blog.sys.id,
        title: blog.fields.title,
        description: blog.fields.description,
        thumbnail: "https:" + blog.fields.thumbnail.fields.file.url,
        author: blog.fields.author,
        category: blog.fields.category,
        createdAt: blog.fields.createdAt,
        content: blog.fields.content,
      };
    });

    return {
      data: blogs,
      meta: { total: response.total, limit: response.limit },
    };
  } catch (error) {
    console.log(error);
  }
};
