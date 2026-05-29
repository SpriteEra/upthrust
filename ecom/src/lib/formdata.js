// export const FORM_URLS = {
//     ecom:
//         "https://upthrust-us.neetocal.com/embed/e7f11461-c2bf-4f81-bd0a-cd3cfa32a724",

//     creative:
//         "https://upthrust-us.neetocal.com/embed/ef3dcb79-dafb-4cdc-9e8f-880d048ebac6",

//     googleAds:
//         "https://upthrust-us.neetocal.com/embed/7da8bbe1-0ca3-4e31-8365-cae43cd2eba8",

//     metaAds:
//         "https://upthrust-us.neetocal.com/embed/85c53dc0-46ac-4520-846f-9d9726a85cc3",

//     performance:
//         "https://upthrust-us.neetocal.com/embed/7f3ad070-34b5-44a3-859b-fa69bf74d2db",

//     seo:
//         "https://upthrust-us.neetocal.com/embed/a5287054-d6aa-4591-8714-ce66c32cf58a",

//     uiux:
//         "https://upthrust-us.neetocal.com/embed/463af662-25a1-433c-85d1-bc7531c305fa"
// };


// utils/formUrls.js

export const getFormUrls = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/form-urls/all-urls`,
            {
                method: "GET",
                cache: "no-store",
            }
        );

        const result = await response.json();

        // Convert array into object
        const formattedUrls = result?.data?.reduce((acc, item) => {
            if (item?.isActive) {
                acc[item.key] = item.url;
            }
            return acc;
        }, {});
        // console.log("Fetched Form URLs:", formattedUrls);

        return formattedUrls;

    } catch (error) {
        console.error("Error fetching form URLs:", error);

        return {};
    }
};