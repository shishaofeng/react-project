// 客户
import Mock, { Random } from "mockjs";
Mock.mock("@cword");
const id = Mock.mock({
  "id|+1": 712,
});
const code = Mock.mock({
  "code|1-10": "22",
});
const status = Mock.mock({
  "number|1-3": 3,
});
const type = Mock.mock({
  "number|1-3": 3,
});
const apiArr = [
  {
    rurl: "api/get/news",
    rtype: "get",
    template: () => {
      return {
        code: 200,
        data: "3333333333",
      };
    },
  },
  {
    rurl: "/sit-api/api-wms-apply/api/labor/manually/voucher/search/list",
    rtype: "post",
    template: () => {
      return {
        code: 200,
        data: {
          list: Mock.mock({
            "list|10": [
              {
                ...id,
                ...code,
                ...status,
                statusDesc: Random.cword(5),
                ...type,
                typeDesc: Random.cword(),
                useAd: "",
                useName: "",
                userDeptCode: "",
                userDeptName: "",
                userJobCode: "",
                userJobName: "",
                createBy: "",
                createByName: "",
                editBy: "",
                editByName: "",
                createTime: "",
                editTime: "",
              },
            ],
          })["list"],
        },
      };
    },
  },
  {
    rurl: "/sit-api/api-wms-apply/api/labor/manually/voucher/save",
    rtype: "post",
    template: () => {
      return {
        code: 200,
        data: "20222223333344",
      };
    },
  },
];

export default apiArr;
