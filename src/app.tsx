// let isSubApp = false;
// export function modifyClientRenderOpts(memo:any) {
//     console.log(memo);
//   return {
//     ...memo,
//     rootElement: isSubApp ? 'sub-root' : memo.rootElement,    
//   };
// }
// export function patchRoutes({ routes }:any) {
//     routes.unshift({
//       path: '/foo',
//       exact: true,
//       component: require('@/extraRoutes/foo').default,
//     });
//   }

// let extraRoutes:null;
// export function patchRoutes({ routes }:any) {
//   merge(routes, extraRoutes);
// }
// export function render() {
//   fetch('/api/routes').then((res) => { extraRoutes = res.routes })
// }

// import { history } from 'umi';
// export function render(oldRender:any) {
//   fetch('/api/auth').then(auth => {
//     if (auth.isLogin) { oldRender() }
//     else { 
//       history.push('/login'); 
//       oldRender()
//     }
//   });
// }