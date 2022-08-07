import { gql } from "graphql-request";
import { graphcms } from "./Client";

export const GetAllProjects = async () => {

    const GetAllProjectsQuery = gql `
        {
            projects {
                id
                image {
                url
                }
                source
                title
                tags
            }
        }
    `;

    const { projects } = await graphcms.request(GetAllProjectsQuery);

    return projects;

};