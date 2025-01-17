import { FC } from "react";
import { useTranslation } from "react-i18next";
import { projectsData } from "./projectsData";

const Projects: FC = () => {
  const { t } = useTranslation();

  const projectIds = [
    "easyplay",
    "keyScraper",
    "unity",
    "dashboard",
    "msScraper",
    "chatLogs",
    "msExtension",
  ] as const;

  return (
    <div>
      {projectIds.map((projectId) => (
        <div
          key={projectId}
          className="container flex flex-col md:flex-row mt-8 divide-y md:divide-y-0 md:divide-x divide-[#313235]"
        >
          <div className="w-full p-4 justify-center">
            <img
              className="shadow-xl rounded-lg object-contain mx-auto"
              src={
                projectsData.images[
                  projectId as keyof typeof projectsData.images
                ]
              }
              alt={t(`projects.${projectId}.name`)}
              title={t(`projects.${projectId}.name`)}
            />
          </div>
          <div className="flex flex-col md:ml-8 p-4 md:pl-8 justify-center w-full">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <h1 className="font-bold text-2xl md:text-3xl">
                {t(`projects.${projectId}.name`)}
              </h1>
              <div className="flex mt-2 md:mt-0">
                {Array.isArray(
                  t(`projects.${projectId}.tools`, { returnObjects: true })
                )
                  ? (
                      t(`projects.${projectId}.tools`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((tool, index) => (
                      <img
                        className="mr-4 md:ml-4 md:mr-0 h-6 md:h-8 object-contain max-h-[300px]"
                        key={index}
                        src={
                          projectsData.tools[
                            tool as keyof typeof projectsData.tools
                          ]
                        }
                        alt={`Tool ${index + 1}`}
                      />
                    ))
                  : null}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-[#5d5d60]">
                {t(`projects.${projectId}.description`)}
              </p>
              {Array.isArray(
                t(`projects.${projectId}.challenges`, { returnObjects: true })
              ) &&
                (
                  t(`projects.${projectId}.challenges`, {
                    returnObjects: true,
                  }) as string[]
                ).length > 0 && (
                  <>
                    <p className="font-bold mt-4">{t("projects.challenges")}</p>
                    <ul className="list-disc">
                      {(
                        t(`projects.${projectId}.challenges`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((challenge, index) => (
                        <li className="ml-8" key={index}>
                          <span className="text-[#5d5d60]">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
            </div>
            <div className="flex gap-4">
              {t(`projects.${projectId}.link`, { defaultValue: "" }) && (
                <a
                  href={t(`projects.${projectId}.link`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-8 w-32 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group">
                    {t("projects.viewWebsite")}
                  </div>
                </a>
              )}
              {t(`projects.${projectId}.github`, { defaultValue: "" }) && (
                <a
                  href={t(`projects.${projectId}.github`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-8 w-20 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group">
                    Github
                  </div>
                </a>
              )}
              {t(`projects.${projectId}.figma`, { defaultValue: "" }) && (
                <a
                  href={t(`projects.${projectId}.figma`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="mt-8 w-20 items-center text-center p-2 text-white hover:text-black rounded-lg bg-black hover:bg-white group">
                    Figma
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
