<template>
  <div class="zbTrip">
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <div class="tabbar">
        <router-link tag="div" to="/layout/index" class="tabbar-item" active-class="active">
          <div>
            <svg
              t="1573634481759"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11678"
              width="24"
              height="24"
            >
              <path
                d="M940.8512 409.31328 518.77888 99.18464c-4.58752-3.3792-9.95328-4.89472-15.23712-4.75136-5.28384-0.14336-10.67008 1.37216-15.23712 4.75136L66.21184 409.31328c-10.91584 8.02816-13.23008 23.32672-5.18144 34.18112 8.04864 10.87488 23.42912 13.16864 34.34496 5.16096l58.04032-42.63936 0 442.44992c0 33.03424 27.11552 64.86016 65.16736 64.86016l177.19296 0c0 0 4.99712 0.16384 10.73152-2.62144 2.64192-1.20832 5.36576-2.99008 7.61856-5.59104 6.22592-6.61504 6.22592-15.54432 6.22592-15.54432l0-164.9664c0 0-1.76128-28.30336 27.7504-28.30336l89.41568 0c15.31904 0 27.7504 11.93984 27.7504 26.68544l0 167.85408c0 0-0.12288 8.0896 7.00416 15.42144 6.08256 6.94272 17.24416 7.0656 17.24416 7.0656l200.704 0c38.05184 0 65.16736-31.82592 65.16736-64.86016L855.38816 407.2448l56.34048 41.39008c10.91584 8.02816 26.29632 5.71392 34.34496-5.16096C954.08128 432.61952 951.76704 417.32096 940.8512 409.31328L940.8512 409.31328M807.34208 827.24864c0 16.11776-5.98016 37.13024-40.93952 37.13024l-152.02304 0 0-153.68192c0-34.38592-34.67264-62.19776-63.11936-62.19776l-116.98176 0c-28.44672 0-63.11936 27.81184-63.11936 62.19776l0 153.68192-128.79872 0c-34.97984 0-40.93952-21.01248-40.93952-37.13024l0.36864-456.8064L503.54176 148.74624l303.43168 222.94528L807.34208 827.24864 807.34208 827.24864M807.34208 827.24864"
                p-id="11679"
              />
            </svg>
          </div>
          <div class="tabbar-item-text">首页</div>
        </router-link>
        <router-link tag="div" to="/layout/destination" active-class="active" class="tabbar-item">
          <div>
            <svg
              t="1573633952950"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10117"
              width="24"
              height="24"
            >
              <path
                d="M512.106424 1023.689938c-5.878894 0-11.756765-1.719154-16.841573-5.143137-16.518209-11.154038-404.490427-276.195459-413.160901-559.546899C78.165244 329.998853 119.812783 216.721927 202.551182 131.412982 283.291065 48.145533 396.125923 0.38374 512.106424 0.38374s228.815359 47.761794 309.555242 131.029242c82.738399 85.309968 124.385938 198.585871 120.448256 327.58692-8.670473 283.352463-396.642692 548.392862-413.160901 559.546899C523.863189 1021.970784 517.984295 1023.689938 512.106424 1023.689938zM512.106424 60.57768c-99.785657 0-196.866716 41.089837-266.349207 112.746854-71.127967 73.347518-106.927311 171.486676-103.459327 283.822161 6.759961 221.540675 296.211329 446.00596 369.808534 499.543294 73.597205-53.537334 363.04755-278.002618 369.808534-499.543294 3.467985-112.335485-32.331359-210.474642-103.459327-283.822161C708.97314 101.667517 611.891058 60.57768 512.106424 60.57768z"
                p-id="10118"
              />
              <path
                d="M512.664126 585.678046c-88.675622 0-160.802336-72.142064-160.802336-160.817686 0-88.660272 72.127737-160.802336 160.802336-160.802336s160.832012 72.142064 160.832012 160.802336C673.497161 513.535983 601.339748 585.678046 512.664126 585.678046zM512.664126 324.251965c-55.462173 0-100.608396 45.130873-100.608396 100.608396s45.146223 100.622722 100.608396 100.622722c55.491849 0 100.638071-45.146223 100.638071-100.622722S568.155974 324.251965 512.664126 324.251965z"
                p-id="10119"
              />
            </svg>
          </div>
          <div class="tabbar-item-text">目的地</div>
        </router-link>
        <router-link tag="div" to="/layout/customization" active-class="active"  class="tabbar-item">
          <div class="made">
            <div class="dingzhi">
              <img
                data-v-6eb2b8a0
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fY3VzdG9tdG91cjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMUQ0OUEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0UyQkY3RCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2lyY2xlIGlkPSJwYXRoLTIiIGN4PSIyMiIgY3k9IjIyIiByPSIyMiI+PC9jaXJjbGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5paR6ams5peF5ri45pS554mIIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i56eB5Lq66K6i5Yi2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY1LjAwMDAwMCwgLTIzOTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJCdG5uYXYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMzg4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik5hdmlnYXRpb25iYXIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fY3VzdG9tdG91ciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1LjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibG9nb193aGl0ZSIgbWFzaz0idXJsKCNtYXNrLTMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjMzODY2NjcsMTUuMjY0IEMxNS43MTQ3NjgyLDE1LjEwNTkwODggMTYuMDAxNzQ3NiwxNC43ODk2NDU3IDE2LjEyMjY2NjcsMTQuNCBDMTUuNzgwMDg3MywxNC4zODE5NDY3IDE1LjQ5NzAwMjIsMTQuMTI2MzU3NyAxNS40NDQxNjA0LDEzLjc4NzM5NyBDMTUuMzkxMzE4NywxMy40NDg0MzY0IDE1LjU4MzE3MiwxMy4xMTg4MDc2IDE1LjkwNCwxMi45OTczMzMzIEwxNS42MzczMzMzLDEyLjMzNiBDMTUuNTkwMDQ3MiwxMi4yMTc5NDAyIDE1LjQ5NzM2MjcsMTIuMTIzNzkzNiAxNS4zODAwNTc0LDEyLjA3NDY2NTggQzE1LjI2Mjc1MiwxMi4wMjU1Mzc5IDE1LjEzMDYzODUsMTIuMDI1NTM4MiAxNS4wMTMzMzMzLDEyLjA3NDY2NjcgTDEzLjM2LDEyLjc0NjY2NjcgQzEzLjI0MjMxNiwxMi43OTI4MjgxIDEzLjE0ODIyOTQsMTIuODg0NTExNCAxMy4wOTkwMzkxLDEzLjAwMDk2MTkgQzEzLjA0OTg0ODgsMTMuMTE3NDEyNSAxMy4wNDk3MTQ1LDEzLjI0ODc4MjUgMTMuMDk4NjY2NywxMy4zNjUzMzMzIEwxMy41NTczMzMzLDE0LjQ5NiBDMTMuNjkxNDkxNiwxNC44MzQyMzc0IDEzLjk1NDYzNjcsMTUuMTA1MjQ5IDE0LjI4ODc3NjgsMTUuMjQ5MzA5NCBDMTQuNjIyOTE2OCwxNS4zOTMzNjk4IDE1LjAwMDYyNjcsMTUuMzk4NjU0OSAxNS4zMzg2NjY3LDE1LjI2NCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRjlFNkJFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLjg0MjY2NjcsMTguOTM4NjY2NyBDMzAuOTA4Nzc3NSwxOC4zNzIxNTk0IDMwLjk0MjYwOTksMTcuODAyMzUwMSAzMC45NDQsMTcuMjMyIEMzMC45NDUxODIzLDE1LjcyODc5ODEgMzAuNzE2NzcxLDE0LjIzNDIzMjcgMzAuMjY2NjY2NywxMi44IEwyNi41MzMzMzMzLDEzLjcxMiBMMjYuMjQsMTIuNzUyIEwyOS41MDQsMTAuODQyNjY2NyBDMjguNDkzMDEzOCw4Ljc1MDQwMDE4IDI3LjAwNjIyODgsNi45MjM4ODMgMjUuMTYyNjY2Nyw1LjUwOTMzMzMzIEwyMi4zNTIsOC43MDkzMzMzMyBDMjIuMTk3MzMzMyw4LjYwMjY2NjY3IDIyLjA1ODY2NjcsOC41MTczMzMzMyAyMS45MzA2NjY3LDguNDM3MzMzMzMgQzIyLjg3MTI2NzgsNi42ODYyOTYzNiAyMi45MzY0MTksNC41OTU1MzcxMyAyMi4xMDY2NjY3LDIuNzg5MzMzMzMgQzIxLjM4NjY2NjcsMS4yNTg2NjY2NyAyMC4wNzQ2NjY3LDAgMTkuMjU4NjY2NywwIEMxOC40NDI2NjY3LDAgMTcuMDY2NjY2NywxLjI5MDY2NjY3IDE2LjQwNTMzMzMsMi40NjkzMzMzMyBMMTYuMTc2LDIuNDY5MzMzMzMgQzE0Ljg2MDM1OTksMi40NzQzMzQ3MiAxMy41NTExODQ3LDIuNjUzNjczNzkgMTIuMjgyNjY2NywzLjAwMjY2NjY3IEwxMi4yNTA2NjY3LDMuMDAyNjY2NjcgQzExLjk3ODY2NjcsMy4wNzczMzMzMyAxMS43MTczMzMzLDMuMTYyNjY2NjcgMTEuNDQ1MzMzMywzLjI1MzMzMzMzIEw5LjIyNjY2NjY3LDMuOTI1MzMzMzMgTDEyLjM0MTMzMzMsOC4zNjI2NjY2NyBDMTEuMDMzMTI5LDguNzgyNDAzMjEgOS44MzA3Mjk0OSw5LjQ3OTEwMzY4IDguODE2LDEwLjQwNTMzMzMgQzcuOTY3NjU3OSwxMS4xODg2OTI1IDYuOTg5NTI0ODUsMTEuODE4NTIzNSA1LjkyNTMzMzMzLDEyLjI2NjY2NjcgTDIuODk2LDEzLjU0NjY2NjcgQzEuNDkxMjE4NjEsMTQuMTM4MzY3IDAuNzUxMTA1MjE0LDE1LjY4NzMzNSAxLjE3MzMzMzMzLDE3LjE1MiBMMS42NTg2NjY2NywxOC44MjY2NjY3IEMyLjA1NTUxMjg1LDIwLjIzMjQxMjcgMy4zMzkzMTQxMiwyMS4yMDIzNDc0IDQuOCwyMS4yIEM0Ljk0MjExNTYsMjEuMjA3Nzg4MiA1LjA4NDU1MTA3LDIxLjIwNzc4ODIgNS4yMjY2NjY2NywyMS4yIEM1Ljk0OTg4MjUxLDIxLjEwMDQxIDYuNjQzMDM1NzYsMjAuODQ1NzA4IDcuMjU4NjY2NjcsMjAuNDUzMzMzMyBMNy4zMDY2NjY2NywyMC40MjEzMzMzIEM3LjY5NjE3NzA0LDIwLjE1NzQ4OTQgOC4xMjQ0MjY2OCwxOS45NTU5NjAyIDguNTc2LDE5LjgyNCBDOS4xNjU4NTc4MiwxOS43MTExMzQ3IDkuNzc1MTE5NTUsMTkuNzU3MTUxNSAxMC4zNDEzMzMzLDE5Ljk1NzMzMzMgQzExLjEyNjE0NTQsMjAuMjQzODU3MyAxMS45MzcxMjUsMjAuNDUyODU0MiAxMi43NjI2NjY3LDIwLjU4MTMzMzMgTDExLjY2NCwyOS43Mzg2NjY3IEM4LjQzNzEwNzIyLDI4LjU4ODc4MzMgNS43ODQxOTgxNiwyNi4yMjg1MTY3IDQuMjY2NjY2NjcsMjMuMTU3MzMzMyBDMy43MzQ5OTM0OSwyMy4yMTAwMTI5IDMuMjAwOTM1MjIsMjMuMjM0OTM1NiAyLjY2NjY2NjY3LDIzLjIzMiBDNS4yNDQ4NTYyLDI5LjAyMTU2NjggMTEuMjI4NTYyOCwzMi41MjE2Nzc1IDE3LjUzODY3NTYsMzEuOTMxMjM2NCBDMjMuODQ4Nzg4NCwzMS4zNDA3OTUzIDI5LjA3OTI5NDQsMjYuNzkxMzYzOSAzMC41Mzg2NjY3LDIwLjYyNCBMMjgsMTkuOTQxMzMzMyBMMjguMTg2NjY2NywxOS4wMTMzMzMzIEwzMC44NDI2NjY3LDE4LjkzODY2NjcgWiBNMTMuNzE3MzMzMywyNS4wMDggQzE5LjA0NDY5NDYsMjQuODg1NDU2NyAyMy43Nzk2NDM5LDIxLjU4MTcxMDQgMjUuNzMzMzMzMywxNi42MjQgQzI2LjAxNzY4OCwxNy42MTkyNjU3IDI2LjIzMTU1MSwxOC42MzMzMzMgMjYuMzczMzMzMywxOS42NTg2NjY3IEMyMy45MTA3MDUzLDI0LjM1OTAyMTYgMTguOTA1MDY0OSwyNy4xNjIwMTI4IDEzLjYxMDY2NjcsMjYuODA1MzMzMyBMMTMuNTA0LDI2LjgwNTMzMzMgTDEzLjcxNzMzMzMsMjUuMDA4IFogTTguNDQ4LDE4LjMyIEw2LjM2OCwxMy42OCBMNi41MDEzMzMzMywxMy42MjEzMzMzIEM3LjcyMDY5NTA1LDEzLjEwNzY3MTMgOC44NDE0MDI1OCwxMi4zODU3OTg1IDkuODEzMzMzMzMsMTEuNDg4IEMxMC43MTU2NDM4LDEwLjY2MjEyNCAxMS43OTMyNTcsMTAuMDUxMjk0MSAxMi45NjUzMzMzLDkuNzAxMzMzMzMgTDE2Ljg4LDguNTMzMzMzMzMgQzE2Ljk3NTk3NDIsOS4wNTA5NTUyNCAxNi45MTY1OTEsOS41ODU0MDM4NiAxNi43MDkzMzMzLDEwLjA2OTMzMzMgTDE3LjM0NCwxMC40NDI2NjY3IEwxNi43MTQ2NjY3LDEwLjA1MzMzMzMgTDE3Ljk2OCwxMC44MzIgQzE4LjAyMTMzMzMsMTAuNzU3MzMzMyAxOS4xNDY2NjY3LDguODc0NjY2NjcgMTcuNDg4LDUuOTM2IEMxNy4xMTE3NTExLDUuMjMyNzM1MzUgMTcuMDk1ODgxMSw0LjM5MTYyMzc5IDE3LjQ0NTMzMzMsMy42NzQ2NjY2NyBDMTcuODIzNjA4NywyLjc4ODgwNTQ0IDE4LjQ1NDI1OTcsMi4wMzM4NzkxIDE5LjI1ODY2NjcsMS41MDQgQzIwLjE3MzMxMTEsMi4yMjA1MDg5NSAyMC44MTM1ODk5LDMuMjI5ODg5NjcgMjEuMDcyLDQuMzYyNjY2NjcgQzIxLjQ3NzMzMzMsNi4xMDY2NjY2NyAyMC44OTYsNy44NDUzMzMzMyAxOS4zMzg2NjY3LDkuNTIgTDIwLjQwNTMzMzMsMTAuNTIyNjY2NyBDMjAuNjUzNjgxNywxMC4yNTg2OTE1IDIwLjg4Njk0MTEsOS45ODA5MTY5MSAyMS4xMDQsOS42OTA2NjY2NyBDMjEuOTc4NjY2NywxMC4yMjQgMjMuNjEwNjY2NywxMS41MDQgMjQuODgsMTQuMzA5MzMzMyBDMjMuNzQwMDM3MywxOS41MjAzODI1IDE5LjIyODQ2NDIsMjMuMzA2Njg1OCAxMy44OTg2NjY3LDIzLjUyNTMzMzMgTDE0LjI0NTMzMzMsMjAuNjQgQzE1LjI2MDQ5MiwyMC42MzMxNzIyIDE2LjI1NjUwNjUsMjAuMzYzMDM1NSAxNy4xMzYsMTkuODU2IEMxOC41OTY5MTIzLDE4LjkyODkxOTIgMTkuNjE1OTkwNSwxNy40NDU1NzI5IDE5Ljk1NzMzMzMsMTUuNzQ5MzMzMyBMMTguNDk2LDE1LjQ5ODY2NjcgQzE4LjIyODM0LDE2Ljc3MjY4MDIgMTcuNDU5NTQyOSwxNy44ODU1MTQxIDE2LjM2MjY2NjcsMTguNTg2NjY2NyBDMTUuMDAyNjY2NywxOS4zODEzMzMzIDEzLjE2MjY2NjcsMTkuMzY1MzMzMyAxMC44NTg2NjY3LDE4LjU0OTMzMzMgQzEwLjA4NzI0MjcsMTguMjcxMTE0MSA5LjI1ODA0Njg1LDE4LjE5MjIzMDQgOC40NDgsMTguMzIgWiBNMTYuMTc2LDMwLjUyMjY2NjcgQzE1LjEzOTYxMzUsMzAuNTIxNzg3NyAxNC4xMDY4NjM1LDMwLjQwMDA3NzEgMTMuMDk4NjY2NywzMC4xNiBMMTMuMzMzMzMzMywyOC4yNjY2NjY3IEwxMy40OTg2NjY3LDI4LjI2NjY2NjcgQzEzLjg3MiwyOC4yNjY2NjY3IDE0LjI0LDI4LjMwOTMzMzMgMTQuNjA4LDI4LjMwOTMzMzMgQzE5LjM4NTk5MzksMjguMjc3MTAxNSAyMy44NTYzMDA3LDI1Ljk0NjY2NjMgMjYuNjE4NjY2NywyMi4wNDggQzI2LjY3NzMzMzMsMjMuMDcyIDI2LjY5MzMzMzMsMjQuMTgxMzMzMyAyNi42NTYsMjUuMzgxMzMzMyBDMjQuMTQ1NjE1NSwyOC42MjM0NDUyIDIwLjI3NjQwNDcsMzAuNTIxNjIzIDE2LjE3NiwzMC41MjI2NjY3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGOUU2QkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                class="t-tab-bar-icon-customize"
              />
            </div>
          </div>
          <div class="tabbar-item-text">定制游</div>
        </router-link>
        <router-link tag="div" to="/layout/search" active-class="active"  class="tabbar-item">
          <div>
            <svg
              t="1573634385102"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="10912"
              width="24"
              height="24"
            >
              <path
                d="M746.3013 656.0273c0 0-14.2549 18.8622-33.3428 37.3497l219.773 215.354 36.4768-34.1019L746.3013 656.0273zM824.3495 422.5726c0 213.7901-164.6831 374.2772-368.8031 374.2772C242.705 793.761 88.3684 626.1566 88.3684 422.8624c0-196.3739 166.1232-361.9626 367.1781-361.9626C659.6664 60.8998 824.3495 228.6441 824.3495 422.5726zM454.2033 109.9626c-174.9625 0-316.7702 141.9208-316.7702 318.9128 0 176.993 141.8077 319.8931 316.7702 319.8931 174.9865 0 321.0815-142.9001 321.0815-319.8931C775.2848 251.8824 629.1899 109.9626 454.2033 109.9626z"
                p-id="10913"
              />
            </svg>
          </div>
          <div class="tabbar-item-text">发现</div>
        </router-link>
        <router-link tag="div" to="/layout/mine" active-class="active" class="tabbar-item">
          <div>
            <svg
              t="1573633896042"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="8481"
              width="24"
              height="24"
            >
              <path
                d="M511.970429 559.100186A279.550093 279.550093 0 0 1 314.302198 81.881862a279.550093 279.550093 0 1 1 395.361887 395.361887 277.719479 277.719479 0 0 1-197.693656 81.856437z m0-514.606083c-129.668529 0-235.05599 105.451024-235.05599 235.05599s105.451024 235.05599 235.05599 235.05599S747.013707 409.167772 747.013707 279.550093 641.588108 44.494103 511.970429 44.494103z"
                p-id="8482"
              />
              <path
                d="M957.699641 1023.94915a22.247052 22.247052 0 0 1-22.247052-22.247052c0-107.43419-43.922036-208.486654-123.655468-284.57157C731.758586 640.715084 625.290553 598.763501 511.970429 598.763501s-219.788156 41.951583-299.813979 118.354314C132.423018 793.202731 88.500982 894.267908 88.500982 1001.752948a22.247052 22.247052 0 0 1-44.494103 0 427.93157 427.93157 0 0 1 36.930105-174.582147 445.424109 445.424109 0 0 1 100.505823-142.241291 468.179665 468.179665 0 0 1 148.73743-95.662322 489.358858 489.358858 0 0 1 363.580385 0 468.179665 468.179665 0 0 1 148.73743 95.662322 445.424109 445.424109 0 0 1 100.505822 142.241291A427.93157 427.93157 0 0 1 979.946692 1001.752948a22.247052 22.247052 0 0 1-22.247051 22.196202z"
                p-id="8483"
              />
            </svg>
          </div>
          <div class="tabbar-item-text">我的</div>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script>
    import index from './index/index.vue'
    export default {
        index
    };
</script>

<style lang="stylus" scoped>

.zbTrip
    display flex
    flex-direction column
    // touch-action none
    height 100%
    // .searchbar 
    //     width  100% 
    //     display  flex 
    //     height  0.44rem 
    //     background  #fff 
    //     align-items  center 
    //     padding  0 18px 
    //     justify-content  space-between 
    // .title 
    //     font-family  PingFangSC-Medium 
    //     font-size  0.15rem 
main
    // overflow-y scroll
    width 100%
    height 100%
    display flex
    flex 1
    background #fff
    flex-direction column
    // padding 0 .18rem

footer 
    width 100%
    height 0.50rem
    display  flex 
    align-items flex-end
    z-index 100
    .tabbar
        display flex
        position relative
        flex-direction row
        width 100%
        height 50px
        padding .1rem 0 0
        text-align center
        background #fff
        font-size .1rem
        justify-content space-around
        .made
            display flex
            align-items flex-end
            justify-content center 
            text-align center
            .dingzhi
                display flex
                align-items flex-end
                justify-content center 
                width 80%
                background #fff
                border-radius 0
                text-align center
                height .49rem
                margin-top -.21rem
                border-radius 50%
                
        .tabbar-item
            color #BEBEBE
            width 0.75rem
            display flex
            text-align center
            flex-direction column
            svg 
                fill #BEBEBE
            .tabbar-item-text
                position relative
                top -.02rem
          .active
            // background #C04374
            color #C04374
            .tabbar-item-text
              color #C04374
            svg
                fill #C04374


</style>