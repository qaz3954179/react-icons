import path from "path";
import camelcase from "camelcase";
import { type IconDefinition } from "../../scripts/_types";
import { glob } from "../../scripts/glob";

export const icons: IconDefinition[] = [
  {
    id: "erpc",
    name: "Education Rewards Plan of Children's Icons",
    contents: [
      {
        files: path.resolve(
          __dirname,
          "../../icons/erpc-icons/svgs/*.svg",
        ),
        formatter: (name) => `Erpc${name}`,
      },
    ],
    projectUrl: "",
    license: "CC BY 4.0 License",
    licenseUrl: "",
    source: {
      type: "git",
      localName: "erpc-icons",
      remoteDir: "svgs/",
      url: "",
      branch: "5.x",
      hash: "afecf2af5d897b763e5e8e28d46aad2f710ccad6",
    },
  },
  // {
  //   id: "fa",
  //   name: "Font Awesome 5",
  //   contents: [
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/fontawesome/svgs/+(brands|solid)/*.svg",
  //       ),
  //       formatter: (name) => `Fa${name}`,
  //     },
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/fontawesome/svgs/regular/*.svg",
  //       ),
  //       formatter: (name) => `FaReg${name}`,
  //     },
  //   ],
  //   projectUrl: "https://fontawesome.com/",
  //   license: "CC BY 4.0 License",
  //   licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  //   source: {
  //     type: "git",
  //     localName: "fontawesome",
  //     remoteDir: "svgs/",
  //     url: "https://github.com/FortAwesome/Font-Awesome.git",
  //     branch: "5.x",
  //     hash: "afecf2af5d897b763e5e8e28d46aad2f710ccad6",
  //   },
  // },
  // {
  //   id: "fa6",
  //   name: "Font Awesome 6",
  //   contents: [
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/fontawesome-6/svgs/+(brands|solid)/*.svg",
  //       ),
  //       formatter: (name) => `Fa${name}`,
  //     },
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/fontawesome-6/svgs/regular/*.svg",
  //       ),
  //       formatter: (name) => `FaReg${name}`,
  //     },
  //   ],
  //   projectUrl: "https://fontawesome.com/",
  //   license: "CC BY 4.0 License",
  //   licenseUrl: "https://creativecommons.org/licenses/by/4.0/",
  //   source: {
  //     type: "git",
  //     localName: "fontawesome-6",
  //     remoteDir: "svgs/",
  //     url: "https://github.com/FortAwesome/Font-Awesome.git",
  //     branch: "6.x",
  //     hash: "37eff7fa00de26db41183a3ad8ed0e9119fbc44b",
  //   },
  // },
  // {
  //   id: "md",
  //   name: "Material Design icons",
  //   contents: [
  //     {
  //       files: async () => {
  //         const normal = await glob(
  //           path.resolve(
  //             __dirname,
  //             "../../icons/material-design-icons/src/*/*/materialicons/24px.svg",
  //           ),
  //         );

  //         const twotone = await glob(
  //           path.resolve(
  //             __dirname,
  //             "../../icons/material-design-icons/src/*/*/materialiconstwotone/24px.svg",
  //           ),
  //         );
  //         return [
  //           ...normal,
  //           ...twotone.filter(
  //             (file) => !normal.includes(file.replace("twotone/", "/")),
  //           ),
  //         ];
  //       },
  //       formatter: (name, file) =>
  //         `Md${camelcase(
  //           file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
  //           { pascalCase: true },
  //         )}`,
  //       processWithSVGO: true,
  //     },
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/material-design-icons/src/*/*/materialiconsoutlined/24px.svg",
  //       ),
  //       formatter: (name, file) =>
  //         `MdOutline${camelcase(
  //           file.replace(/^.*\/([^/]+)\/materialicons[^/]*\/24px.svg$/i, "$1"),
  //           { pascalCase: true },
  //         )}`,
  //       processWithSVGO: true,
  //     },
  //   ],
  //   projectUrl: "http://google.github.io/material-design-icons/",
  //   license: "Apache License Version 2.0",
  //   licenseUrl:
  //     "https://github.com/google/material-design-icons/blob/master/LICENSE",
  //   source: {
  //     type: "git",
  //     localName: "material-design-icons",
  //     remoteDir: "src/",
  //     url: "https://github.com/google/material-design-icons.git",
  //     branch: "master",
  //     hash: "ef43291c4d6ebbada3f46e1f584c39bc8f6861b2",
  //   },
  // },
 
  // {
  //   id: "fi",
  //   name: "Feather",
  //   contents: [
  //     {
  //       files: path.resolve(
  //         path.dirname(require.resolve("feather-icons")),
  //         "icons/*.svg",
  //       ),
  //       formatter: (name) => `Fi${name}`,
  //     },
  //   ],
  //   projectUrl: "https://feathericons.com/",
  //   license: "MIT",
  //   licenseUrl: "https://github.com/feathericons/feather/blob/master/LICENSE",
  // },
  // {
  //   id: "ai",
  //   name: "Ant Design Icons",
  //   contents: [
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/ant-design-icons/packages/icons-svg/svg/filled/*.svg",
  //       ),
  //       formatter: (name) => `AiFill${name}`,
  //     },
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/ant-design-icons/packages/icons-svg/svg/outlined/*.svg",
  //       ),
  //       formatter: (name) => `AiOutline${name}`,
  //     },
  //     {
  //       files: path.resolve(
  //         __dirname,
  //         "../../icons/ant-design-icons/packages/icons-svg/svg/twotone/*.svg",
  //       ),
  //       formatter: (name) => `AiTwotone${name}`,
  //       multiColor: true,
  //     },
  //   ],
  //   projectUrl: "https://github.com/ant-design/ant-design-icons",
  //   license: "MIT",
  //   licenseUrl: "https://opensource.org/licenses/MIT",
  //   source: {
  //     type: "git",
  //     localName: "ant-design-icons",
  //     remoteDir: "packages/icons-svg/svg/",
  //     url: "https://github.com/ant-design/ant-design-icons.git",
  //     branch: "master",
  //     hash: "6f00108512f880149afe0904fb4a1cf776612aa0",
  //   },
  // },
];
