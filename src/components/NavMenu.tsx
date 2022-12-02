import profilePic from '../data/profile-pic.png';
import mncLogo from '../data/mnc-logo.png';

function NavMenu() {
  return (
    <div className="flex-shrink-0 flex sm:flex-col fixed sm:sticky bottom-0 inset-x-0 sm:left-0 sm:top-0 sm:w-16 lg:w-[18.4375rem] h-16 sm:h-screen overflow-y-auto overflow-x-hidden bg-white shadow-below z-50">
      {/* Large Screen Manning & Co. Logo */}
      <div className="shrink-0 hidden lg:block sticky top-0 h-16 p-std bg-primary">
        <svg className="w-auto h-full" viewBox="0 0 250 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.9838 0.979594C28.3487 1.00841 27.8291 1.09484 27.4538 1.2389C27.0785 1.38296 26.7032 1.61345 26.3857 1.93037C26.1259 2.16087 25.9527 2.42017 25.8372 2.70829C25.7217 2.9964 25.6351 3.34214 25.5774 3.77431C25.4908 4.35054 25.4619 5.04202 25.4619 5.84874V18.1801C25.4619 19.3325 25.5196 20.1969 25.664 20.7443C25.8083 21.2917 26.0393 21.7527 26.3857 22.0984C26.9919 22.7035 27.858 23.0204 28.9838 23.078V23.4526H18.2737V23.078C18.9088 23.0492 19.4573 22.9628 19.8326 22.7899C20.2367 22.6459 20.5831 22.4154 20.9007 22.0984C21.2471 21.7527 21.4781 21.2917 21.6224 20.7443C21.7379 20.1969 21.8245 19.3325 21.8245 18.2089V3.22689L13.1928 23.4526H12.8464L4.21478 3.51501V18.1801C4.21478 19.3325 4.27252 20.1681 4.41686 20.7155C4.53233 21.2629 4.79215 21.7239 5.13857 22.0696C5.45612 22.3866 5.80254 22.6171 6.2067 22.7611C6.61085 22.9052 7.13049 22.9916 7.76559 23.0204V23.395H0V23.0204C0.635104 22.9916 1.15473 22.9052 1.55889 22.7611C1.96305 22.6171 2.30947 22.3866 2.62702 22.0696C2.97344 21.7239 3.20439 21.2629 3.34873 20.7155C3.4642 20.1681 3.55081 19.3037 3.55081 18.1801V5.84874C3.55081 5.33013 3.55081 4.84034 3.49307 4.37935C3.43533 3.54382 3.31986 2.93878 3.11778 2.56423C2.8291 2.04562 2.45381 1.64226 1.96305 1.41177C1.47229 1.15246 0.837182 1.00841 0.0288684 0.979594V0.576233H7.27483L14.5497 18.4682L22.0843 0.576233H28.9838V0.950783V0.979594Z" fill="white"/>
          <path d="M60.739 3.63025V18.1801C60.739 19.3325 60.7968 20.1681 60.9411 20.7155C61.0566 21.2629 61.3164 21.7239 61.6628 22.0696C61.9804 22.3866 62.3268 22.6171 62.7309 22.7611C63.1351 22.9052 63.6547 22.9916 64.2898 23.0204V23.395H56.5531V23.0204C57.1882 22.9916 57.7078 22.9052 58.112 22.7611C58.5161 22.6171 58.8626 22.3866 59.1801 22.0696C59.5265 21.7239 59.7575 21.2629 59.9018 20.7155C60.0173 20.1681 60.1039 19.3037 60.1039 18.1801V5.81993C60.1039 4.69628 60.0462 3.86075 59.9018 3.31333C59.7864 2.76591 59.5265 2.30492 59.1801 1.95919C58.8914 1.64226 58.5161 1.41177 58.1409 1.26771C57.7367 1.12365 57.2171 1.03722 56.582 1.00841V0.576233H63.0485L76.6743 17.9208V5.84874C76.6743 4.69628 76.6166 3.86075 76.4723 3.31333C76.3568 2.76591 76.097 2.30492 75.7506 1.95919C75.433 1.64226 75.0866 1.41177 74.6824 1.26771C74.2783 1.12365 73.7586 1.03722 73.1235 1.00841V0.576233H80.8603V0.950783C79.7344 0.950783 78.8683 1.26771 78.2332 1.93037C77.8868 2.27611 77.6559 2.7371 77.5115 3.28452C77.3961 3.83194 77.3095 4.66747 77.3095 5.79112V23.395H76.5589L60.739 3.63025Z" fill="white"/>
          <path d="M87.3557 3.63025V18.1801C87.3557 19.3325 87.4135 20.1681 87.5578 20.7155C87.6733 21.2629 87.9331 21.7239 88.2795 22.0696C88.5971 22.3866 88.9435 22.6171 89.3476 22.7611C89.7518 22.9052 90.2714 22.9916 90.9065 23.0204V23.395H83.1698V23.0204C83.8049 22.9916 84.3245 22.9052 84.7287 22.7611C85.1329 22.6171 85.4793 22.3866 85.7968 22.0696C86.1432 21.7239 86.3742 21.2629 86.5185 20.7155C86.634 20.1681 86.7206 19.3037 86.7206 18.1801V5.81993C86.7206 4.69628 86.6629 3.86075 86.5185 3.31333C86.4031 2.76591 86.1432 2.30492 85.7968 1.95919C85.5081 1.64226 85.1329 1.41177 84.7576 1.26771C84.3534 1.12365 83.8338 1.03722 83.1987 1.00841V0.576233H89.6652L103.291 17.9208V5.84874C103.291 4.69628 103.233 3.86075 103.089 3.31333C102.973 2.76591 102.714 2.30492 102.367 1.95919C102.05 1.64226 101.703 1.41177 101.299 1.26771C100.895 1.12365 100.375 1.03722 99.7402 1.00841V0.576233H107.477V0.950783C106.351 0.950783 105.485 1.26771 104.85 1.93037C104.504 2.27611 104.273 2.7371 104.128 3.28452C104.013 3.83194 103.926 4.66747 103.926 5.79112V23.395H103.176L87.3557 3.63025Z" fill="white"/>
          <path d="M120.525 0.576233V0.950783C119.89 0.979594 119.371 1.06603 118.967 1.21009C118.562 1.35414 118.216 1.58464 117.898 1.90156C117.465 2.33374 117.206 2.96759 117.09 3.7455C117.032 4.35054 117.003 5.01321 117.003 5.79112V18.1801C117.003 19.102 117.061 19.8511 117.148 20.3698C117.234 20.9172 117.379 21.3493 117.581 21.6663C117.87 22.1273 118.245 22.4442 118.707 22.6747C119.169 22.9052 119.775 23.0204 120.525 23.078V23.4526H109.815V23.078C110.45 23.0492 110.999 22.9628 111.374 22.7899C111.778 22.6459 112.125 22.4154 112.413 22.0984C112.76 21.7527 113.02 21.2917 113.135 20.7443C113.251 20.1969 113.308 19.3613 113.308 18.2089V5.84874C113.308 4.69628 113.251 3.86075 113.135 3.31333C113.02 2.76591 112.76 2.30492 112.413 1.95919C112.125 1.64226 111.749 1.41177 111.345 1.26771C110.941 1.12365 110.421 1.03722 109.786 1.00841V0.576233H120.497H120.525Z" fill="white"/>
          <path d="M127.05 3.63025V18.1801C127.05 19.3325 127.107 20.1681 127.252 20.7155C127.367 21.2629 127.627 21.7239 127.973 22.0696C128.291 22.3866 128.637 22.6171 129.042 22.7611C129.446 22.9052 129.965 22.9916 130.6 23.0204V23.395H122.864V23.0204C123.499 22.9916 124.018 22.9052 124.423 22.7611C124.827 22.6171 125.173 22.3866 125.491 22.0696C125.837 21.7239 126.068 21.2629 126.212 20.7155C126.328 20.1681 126.415 19.3037 126.415 18.1801V5.81993C126.415 4.69628 126.357 3.86075 126.212 3.31333C126.097 2.76591 125.837 2.30492 125.491 1.95919C125.202 1.64226 124.827 1.41177 124.452 1.26771C124.047 1.12365 123.528 1.03722 122.893 1.00841V0.576233H129.359L142.985 17.9208V5.84874C142.985 4.69628 142.927 3.86075 142.783 3.31333C142.667 2.76591 142.408 2.30492 142.061 1.95919C141.744 1.64226 141.397 1.41177 140.993 1.26771C140.589 1.12365 140.069 1.03722 139.434 1.00841V0.576233H147.171V0.950783C146.045 0.950783 145.179 1.26771 144.544 1.93037C144.197 2.27611 143.967 2.7371 143.822 3.28452C143.707 3.83194 143.62 4.66747 143.62 5.79112V23.395H142.87L127.079 3.57263L127.05 3.63025Z" fill="white"/>
          <path d="M170.497 0.576236L170.699 7.86555H170.323C169.544 5.41657 168.562 3.57263 167.35 2.36255C166.137 1.15247 164.694 0.547425 162.962 0.547425C161.634 0.547425 160.479 0.806729 159.527 1.35415C158.574 1.90157 157.679 2.76591 156.842 4.00481C155.167 6.4826 154.33 9.33494 154.33 12.533C154.33 14.06 154.532 15.5006 154.936 16.8547C155.341 18.2089 155.918 19.419 156.697 20.4562C158.199 22.473 160.017 23.4814 162.182 23.4814C163.02 23.4814 163.828 23.3085 164.579 22.934C165.329 22.5882 165.935 22.0984 166.426 21.4646C167.09 20.6002 167.408 19.563 167.408 18.3529C167.408 17.2581 167.119 16.4514 166.513 15.9616C165.906 15.4718 164.925 15.2125 163.539 15.2125V14.8379H174.249V15.2125C173.268 15.2989 172.575 15.443 172.171 15.6159C171.767 15.7887 171.478 16.1056 171.276 16.5666C171.074 17.0564 170.958 18.036 170.958 19.5054C170.958 19.9088 170.958 20.5426 171.016 21.3782V21.7527C170.612 21.6087 170.323 21.5222 170.121 21.5222C169.861 21.5222 169.573 21.6375 169.169 21.8968C168.187 22.5594 167.061 23.078 165.791 23.4238C164.492 23.7695 163.135 23.9712 161.721 23.9712C159.758 23.9712 157.968 23.6255 156.38 22.9628C154.792 22.3001 153.522 21.3205 152.54 20.0816C151.79 19.1309 151.241 18.036 150.837 16.7395C150.433 15.443 150.231 14.06 150.231 12.6195C150.231 10.6315 150.577 8.75871 151.299 7.05883C152.021 5.33014 153.031 3.91837 154.33 2.79472C155.398 1.90157 156.611 1.18128 157.997 0.691482C159.382 0.201687 160.855 -0.0576172 162.385 -0.0576172C163.279 -0.0576172 164.117 0.0288174 164.867 0.201687C165.647 0.374556 166.455 0.633859 167.321 1.00841L168.303 1.46939C168.562 1.55583 168.764 1.61345 168.967 1.61345C169.4 1.61345 169.746 1.2389 169.977 0.518613H170.41L170.497 0.576236Z" fill="white"/>
          <path d="M190.497 10.1797L196.501 17.6797C197.347 16.263 197.921 15.2074 198.248 14.4297C198.576 13.6797 198.739 13.0408 198.739 12.513C198.739 11.4852 197.921 10.8463 196.256 10.6241V10.2908H203.215V10.6241C202.669 10.6797 202.205 10.763 201.878 10.8741C201.523 10.9852 201.196 11.1797 200.895 11.4574C200.295 11.9852 199.531 13.0686 198.63 14.763L198.084 15.7908C197.784 16.3741 197.347 17.1241 196.774 18.0686C197.238 18.5963 197.757 19.1797 198.385 19.8186C199.012 20.4297 199.558 20.9574 200.022 21.3463C200.704 21.9019 201.305 22.3186 201.796 22.5686C202.315 22.8186 202.806 22.9574 203.27 22.9574C203.788 22.9574 204.225 22.8186 204.553 22.5686C204.907 22.3186 205.208 21.9019 205.453 21.3186L205.808 21.4574C205.208 23.2908 203.925 24.2074 201.96 24.2074C201.305 24.2074 200.622 24.0963 199.886 23.8741C199.176 23.6519 198.521 23.3463 197.921 22.9297C197.02 22.3186 196.092 21.513 195.137 20.4852C194.618 21.1797 194.181 21.6797 193.854 22.0408C193.172 22.7352 192.353 23.263 191.425 23.6519C190.497 24.013 189.515 24.2074 188.45 24.2074C187.495 24.2074 186.54 24.0408 185.639 23.7352C184.738 23.4019 184.001 22.9574 183.428 22.4019C182.364 21.3741 181.818 20.0963 181.818 18.5408C181.818 16.9852 182.337 15.5963 183.346 14.3463C183.756 13.8463 184.247 13.3741 184.82 12.9574C185.393 12.513 186.158 12.013 187.167 11.4297L187.468 11.263C186.731 10.3186 186.212 9.56856 185.885 9.013C185.148 7.73522 184.793 6.59633 184.793 5.59633C184.793 4.98522 184.957 4.34633 185.284 3.73522C185.694 2.92967 186.321 2.31856 187.14 1.90189C187.959 1.48522 188.941 1.263 190.06 1.263C191.534 1.263 192.762 1.62411 193.718 2.34633C194.673 3.06856 195.164 4.013 195.164 5.15189C195.164 5.98522 194.918 6.73522 194.427 7.37411C193.936 8.013 193.144 8.65189 192.025 9.29078C191.234 9.73522 190.715 10.0686 190.415 10.2352M187.822 11.6797C186.84 12.2352 186.076 12.9852 185.53 13.9852C184.984 14.9574 184.711 16.0686 184.711 17.263C184.711 18.0963 184.848 18.9019 185.148 19.6797C185.448 20.4574 185.83 21.1241 186.321 21.6519C186.785 22.1241 187.331 22.513 187.959 22.7908C188.587 23.0686 189.269 23.2074 189.978 23.2074C191.097 23.2074 192.08 22.9019 192.953 22.263C193.281 22.013 193.581 21.763 193.827 21.4852C194.1 21.2074 194.427 20.763 194.809 20.2074L187.85 11.7352L187.822 11.6797ZM190.415 9.88376C190.988 9.49487 192.55 6.94721 192.55 6.94721C193.182 5.68405 193.182 5.05247 193.182 5.05247C193.182 5.05247 193.182 3.78932 192.55 3.15774C192.55 3.15774 191.658 1.89458 190.025 1.89458C191.658 1.89458 188.392 1.89458 190.025 1.89458C188.392 1.89458 187.5 2.52616 187.5 2.52616C187.5 2.52616 186.57 3.15134 186.869 5.05247C186.941 5.51324 187.357 6.05194 188.131 7.15481C188.677 7.93259 189.688 9.13376 190.343 9.88376" fill="white"/>
          <path d="M231.033 0.460984L231.236 7.95198H230.86C230.745 7.63505 230.629 7.37575 230.572 7.20288C230.167 6.13685 229.85 5.33013 229.619 4.81152C229.186 3.86074 228.551 3.02521 227.714 2.21849C227.078 1.61345 226.443 1.21008 225.779 0.921969C225.115 0.662665 224.365 0.518607 223.528 0.518607C222.257 0.518607 221.16 0.777911 220.237 1.32533C219.428 1.81513 218.649 2.5066 217.956 3.39976C217.263 4.29292 216.686 5.33013 216.224 6.48259C215.589 8.09604 215.271 9.93998 215.271 12.0144C215.271 13.7719 215.502 15.3565 215.935 16.7395C216.368 18.1513 217.003 19.3325 217.841 20.2833C219.371 22.0408 221.42 22.934 223.99 22.934C225.26 22.934 226.414 22.7035 227.425 22.2713C228.435 21.8391 229.244 21.2053 229.792 20.3986C230.427 19.4766 230.918 18.2089 231.207 16.6531L231.582 16.7107C231.38 18.4682 230.889 19.88 230.139 20.9172C229.417 21.8968 228.435 22.6747 227.165 23.1933C225.895 23.7119 224.451 23.9712 222.806 23.9712C221.276 23.9712 219.775 23.7407 218.389 23.2797C216.137 22.5306 214.376 21.2053 213.135 19.2749C211.865 17.3445 211.23 15.0396 211.23 12.389C211.23 10.3433 211.605 8.47059 212.327 6.7419C213.077 5.01321 214.088 3.63025 215.416 2.59304C216.426 1.78631 217.639 1.15246 219.053 0.662665C220.439 0.230492 221.882 0 223.297 0C224.711 0 226.068 0.259304 227.598 0.777911L228.984 1.2389C229.244 1.35414 229.475 1.38295 229.677 1.38295C229.965 1.38295 230.196 1.26771 230.369 1.03721C230.456 0.921969 230.543 0.7491 230.658 0.489796H231.062L231.033 0.460984Z" fill="white"/>
          <path d="M234.296 9.45022C234.296 7.63509 234.96 6.02165 236.316 4.60988C237.962 2.88119 239.896 2.04565 242.177 2.04565C244.457 2.04565 246.391 2.91 248.008 4.60988C249.336 6.05046 250.029 7.6639 250.029 9.47903C250.029 11.2942 249.394 12.85 248.124 14.2617C246.565 15.9904 244.573 16.826 242.177 16.826C239.781 16.826 237.789 15.9616 236.23 14.2617C235.624 13.5991 235.133 12.85 234.815 12.0144C234.498 11.1789 234.325 10.3434 234.325 9.47903M237.385 9.27735C237.385 11.2077 237.818 12.85 238.684 14.2041C239.665 15.7023 240.878 16.4514 242.292 16.4514C242.898 16.4514 243.476 16.2785 244.053 15.9616C244.631 15.6159 245.121 15.1549 245.525 14.5499C245.958 13.916 246.305 13.1381 246.594 12.1873C246.853 11.2365 246.998 10.3434 246.998 9.45022C246.998 8.55706 246.853 7.60628 246.565 6.68431C246.276 5.76234 245.901 4.95562 245.41 4.29295C244.486 3.02525 243.36 2.39139 242.032 2.39139C240.704 2.39139 239.665 3.05406 238.77 4.37939C237.846 5.70472 237.385 7.31816 237.385 9.24854" fill="white"/>
          <path d="M242.177 19.6783C242.725 19.6783 243.216 19.88 243.62 20.2833C244.024 20.6867 244.226 21.1765 244.226 21.7239C244.226 22.2713 244.024 22.7611 243.62 23.1645C243.216 23.5678 242.754 23.7695 242.177 23.7695C241.599 23.7695 241.137 23.5678 240.733 23.1645C240.329 22.7611 240.127 22.3001 240.127 21.7239C240.127 21.1477 240.329 20.6867 240.733 20.2833C241.137 19.88 241.599 19.6783 242.177 19.6783Z" fill="white"/>
          <path d="M53.8106 22.7899C53.4642 22.6747 53.1466 22.5306 52.8868 22.3289C52.5115 22.0408 52.1651 21.6086 51.8187 21.0324C51.5011 20.4562 51.0681 19.5054 50.5196 18.1801L43.2159 0.576233H42.2632L36.1143 16.3649C35.5658 17.8055 35.1039 18.8716 34.7575 19.5918C34.411 20.3121 34.0646 20.8884 33.7182 21.3493C33.2852 21.9256 32.8521 22.3289 32.4191 22.5882C31.9861 22.8475 31.4376 22.9916 30.8602 23.0204V23.395H38.366V23.0204C37.6732 22.9628 37.1247 22.7899 36.6916 22.473C36.3741 22.2425 36.1431 21.9544 35.9411 21.6086C35.7679 21.2629 35.6524 20.8595 35.6524 20.4562C35.6524 19.8223 35.8545 18.958 36.2875 17.892H46.5935L46.709 18.1513L46.9976 18.8427C47.3152 19.6207 47.4595 20.2257 47.4595 20.6867C47.4595 21.4646 47.1131 22.0696 46.4203 22.5018C46.0161 22.7611 45.3233 22.9052 44.3418 22.9916V23.3661H55.3695V22.9916C54.6766 22.9052 54.157 22.8187 53.8106 22.7035M36.5762 17.1717L36.8649 16.4802L37.5 14.7803L41.3106 4.81153L46.3337 17.1717H36.5762Z" fill="white"/>
        </svg>
      </div>

      {/* Medium Screen Manning & Co. Logo */}
      <div className="shrink-0 hidden sm:flex lg:hidden justify-center items-center sticky top-0 h-16 p-2 bg-primary">
        <img className='w-full' src={mncLogo} alt='manning and co. logo' aria-hidden />
      </div>

      {/* Large screen Navigation */}
      <nav className='hidden lg:flex flex-col divide-y divide-accent-100 px-std py-7'>
        {/* Profile Info */}
        <div className="py-7">
          <img src={profilePic} className='w-[4.25rem] h-[4.25rem] mb-3' alt='profile' aria-hidden />
          <p className='font-bold'>Radhika Dhawan Puri</p>
          <p className='text-sm'>Senior Client Services</p>
        </div>
        {/* Navigation Menu */}
        <div className="flex flex-col gap-3 py-7">
          <p className='text-xs tracking-[0.16em] uppercase'>Navigation</p>
          <button className='btn max-w-max min-h-0 text-primary hover:text-primary px-0 hover:bg-transparent active:bg-transparent'>
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 1.66667C12.9602 1.66667 13.3333 2.03976 13.3333 2.5V2.5C13.3333 2.96024 12.9602 3.33333 12.5 3.33333H10.8333C10.3731 3.33333 10 2.96024 10 2.5V2.5C10 2.03976 10.3731 1.66667 10.8333 1.66667H12.5ZM4 1.66667C4.55229 1.66667 5 2.11438 5 2.66667V5.66667C5 6.21895 4.55228 6.66667 4 6.66667H2.66667C2.11438 6.66667 1.66667 6.21895 1.66667 5.66667V2.66667C1.66667 2.11438 2.11438 1.66667 2.66667 1.66667H4ZM12.3333 8.33333C12.8856 8.33333 13.3333 8.78105 13.3333 9.33333V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H11C10.4477 13.3333 10 12.8856 10 12.3333V9.33333C10 8.78105 10.4477 8.33333 11 8.33333H12.3333ZM4.16667 11.6667C4.6269 11.6667 5 12.0398 5 12.5V12.5C5 12.9602 4.6269 13.3333 4.16667 13.3333H2.5C2.03976 13.3333 1.66667 12.9602 1.66667 12.5V12.5C1.66667 12.0398 2.03976 11.6667 2.5 11.6667H4.16667ZM15 1C15 0.447715 14.5523 0 14 0H9.33333C8.78105 0 8.33333 0.447715 8.33333 1V4C8.33333 4.55228 8.78105 5 9.33333 5H14C14.5523 5 15 4.55228 15 4V1ZM6.66667 1C6.66667 0.447715 6.21895 0 5.66667 0H0.999999C0.447714 0 0 0.447715 0 1V7.33333C0 7.88562 0.447715 8.33333 1 8.33333H5.66667C6.21895 8.33333 6.66667 7.88562 6.66667 7.33333V1ZM15 7.66667C15 7.11438 14.5523 6.66667 14 6.66667H9.33333C8.78105 6.66667 8.33333 7.11438 8.33333 7.66667V14C8.33333 14.5523 8.78105 15 9.33333 15H14C14.5523 15 15 14.5523 15 14V7.66667ZM6.66667 11C6.66667 10.4477 6.21895 10 5.66667 10H0.999999C0.447714 10 0 10.4477 0 11V14C0 14.5523 0.447715 15 1 15H5.66667C6.21895 15 6.66667 14.5523 6.66667 14V11Z" fill="currentColor"/>
            </svg>
            Dashboard
          </button>
          <button className='btn max-w-max min-h-0 px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg width="16" height="17" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 15.8L15.4 17M9.79999 13.8C9.79999 14.4365 10.0528 15.047 10.5029 15.4971C10.953 15.9471 11.5635 16.2 12.2 16.2C12.8365 16.2 13.447 15.9471 13.897 15.4971C14.3471 15.047 14.6 14.4365 14.6 13.8C14.6 13.1635 14.3471 12.553 13.897 12.1029C13.447 11.6529 12.8365 11.4 12.2 11.4C11.5635 11.4 10.953 11.6529 10.5029 12.1029C10.0528 12.553 9.79999 13.1635 9.79999 13.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.8 9V3.9992C13.8 3.93605 13.7876 3.87351 13.7635 3.81517C13.7393 3.75683 13.7039 3.70382 13.6592 3.6592L11.1408 1.1408C11.0509 1.05076 10.9289 1.00011 10.8016 1H1.48C1.3527 1 1.23061 1.05057 1.14059 1.14059C1.05057 1.23061 1 1.3527 1 1.48V16.52C1 16.6473 1.05057 16.7694 1.14059 16.8594C1.23061 16.9494 1.3527 17 1.48 17H6.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 1.26507V3.54993C11 3.66929 11.0474 3.78377 11.1318 3.86817C11.2162 3.95258 11.3306 4 11.4499 4H13.734C13.7865 4.00026 13.838 3.98485 13.8818 3.95573C13.9256 3.9266 13.9598 3.88509 13.9799 3.83648C14 3.78786 14.0052 3.73436 13.9948 3.68279C13.9843 3.63122 13.9588 3.58392 13.9214 3.54693L11.4529 1.07754C11.4158 1.0405 11.3685 1.01528 11.3171 1.00508C11.2657 0.99487 11.2124 1.00013 11.1639 1.02019C11.1155 1.04025 11.0741 1.07421 11.0449 1.11779C11.0157 1.16137 11.0001 1.21262 11 1.26507Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Approvals
          </button>
        </div>
        {/* Account Menu */}
        <div className="flex flex-col gap-3 py-7">
          <p className='text-xs tracking-[0.16em] uppercase'>My Account</p>
          <button className='btn max-w-max min-h-0 px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00002 6.91473C9.94175 6.91473 10.6364 6.14262 10.6364 5.09372C10.6364 4.04482 9.94175 3.27271 9.00002 3.27271C8.05911 3.27271 7.36366 4.04482 7.36366 5.09372C7.36366 6.14262 8.05911 6.91473 9.00002 6.91473ZM9.00002 7.82524C7.19266 7.82524 5.72729 9.29298 5.72729 11.1031V11.4545H12.2727V11.1031C12.2727 9.29298 10.8074 7.82524 9.00002 7.82524Z" fill="currentColor"/>
              <path d="M15.3637 0H2.63642C1.63369 0 0.818237 0.8073 0.818237 1.8V13.5C0.818237 14.4927 1.63369 15.3 2.63642 15.3H6.27278L9.00006 18L11.7273 15.3H15.3637C16.3664 15.3 17.1819 14.4927 17.1819 13.5V1.8C17.1819 0.8073 16.3664 0 15.3637 0ZM10.8182 13.5L9.00006 15.3L7.18187 13.5H2.63642V1.8H15.3637L15.3655 13.5H10.8182Z" fill="currentColor"/>
            </svg>
            My Clients
          </button>
          <button className='btn max-w-max min-h-0 px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.57272 16C5.28217 15.6147 4.11337 14.9018 3.18009 13.9307C3.48037 13.5746 3.66755 13.1369 3.71769 12.6738C3.76783 12.2106 3.67865 11.7431 3.46155 11.3309C3.24445 10.9188 2.90931 10.5808 2.49902 10.3601C2.08873 10.1395 1.62194 10.0464 1.1584 10.0925C1.05279 9.57526 0.999725 9.04863 1 8.52068C1 7.70529 1.12484 6.91877 1.35737 6.17985H1.39014C1.78798 6.17998 2.1793 6.07871 2.52713 5.88559C2.87496 5.69248 3.16783 5.4139 3.3781 5.07615C3.58836 4.73841 3.70906 4.35265 3.72882 3.95529C3.74858 3.55794 3.66674 3.1621 3.49103 2.80517C4.40574 1.95343 5.51196 1.33428 6.71629 1C6.91229 1.38483 7.21093 1.70794 7.57916 1.93358C7.9474 2.15922 8.37088 2.27859 8.80275 2.27848C9.23462 2.27859 9.6581 2.15922 10.0263 1.93358C10.3946 1.70794 10.6932 1.38483 10.8892 1C12.0935 1.33428 13.1998 1.95343 14.1145 2.80517C13.9375 3.1646 13.8557 3.56345 13.877 3.96354C13.8982 4.36363 14.0218 4.75156 14.2359 5.09021C14.4501 5.42885 14.7475 5.70688 15.0998 5.89766C15.4521 6.08845 15.8475 6.18561 16.2481 6.17985C16.4857 6.93739 16.6062 7.72676 16.6055 8.52068C16.6055 9.05907 16.5509 9.58497 16.4471 10.0929C15.9836 10.0467 15.5168 10.1399 15.1065 10.3605C14.6962 10.5811 14.361 10.9192 14.1439 11.3313C13.9268 11.7435 13.8377 12.211 13.8878 12.6742C13.9379 13.1373 14.1251 13.575 14.4254 13.9311C13.4921 14.902 12.3233 15.6148 11.0328 16C10.8812 15.5277 10.5836 15.1156 10.1828 14.8233C9.78205 14.531 9.2988 14.3735 8.80275 14.3735C8.30669 14.3735 7.82344 14.531 7.42266 14.8233C7.02188 15.1156 6.72427 15.5277 6.57272 16Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
              <path d="M8.80274 11.2516C9.16137 11.2516 9.5165 11.181 9.84783 11.0437C10.1792 10.9065 10.4802 10.7053 10.7338 10.4517C10.9874 10.1982 11.1886 9.89709 11.3258 9.56576C11.4631 9.23442 11.5337 8.8793 11.5337 8.52066C11.5337 8.16203 11.4631 7.80691 11.3258 7.47557C11.1886 7.14424 10.9874 6.84318 10.7338 6.58958C10.4802 6.33599 10.1792 6.13483 9.84783 5.99759C9.5165 5.86034 9.16137 5.7897 8.80274 5.7897C8.07844 5.7897 7.38381 6.07743 6.87166 6.58958C6.3595 7.10174 6.07178 7.79637 6.07178 8.52066C6.07178 9.24496 6.3595 9.93959 6.87166 10.4517C7.38381 10.9639 8.07844 11.2516 8.80274 11.2516V11.2516Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            </svg>
            Edit Profiles
          </button>
        </div>
      </nav>

      {/* Medium Screen Navigation */}
      <nav className='flex sm:flex-col w-full h-full sm:w-auto sm:h-auto justify-evenly sm:justify-start items-center lg:hidden sm:divide-y divide-accent-100 px-2'>
        {/* Profile Info */}
        <div className="hidden sm:block py-6">
          <img src={profilePic} className='w-12 h-12' alt='profile' aria-hidden />
        </div>
        {/* Navigation Menu */}
        <div className="flex w-full h-full sm:w-auto sm:h-auto justify-evenly sm:justify-start sm:flex-col sm:gap-4 py-2 sm:py-6">
          <button className='btn min-h-full sm:min-h-0 w-full text-primary hover:text-primary px-0 hover:bg-transparent active:bg-transparent'>
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 1.66667C12.9602 1.66667 13.3333 2.03976 13.3333 2.5V2.5C13.3333 2.96024 12.9602 3.33333 12.5 3.33333H10.8333C10.3731 3.33333 10 2.96024 10 2.5V2.5C10 2.03976 10.3731 1.66667 10.8333 1.66667H12.5ZM4 1.66667C4.55229 1.66667 5 2.11438 5 2.66667V5.66667C5 6.21895 4.55228 6.66667 4 6.66667H2.66667C2.11438 6.66667 1.66667 6.21895 1.66667 5.66667V2.66667C1.66667 2.11438 2.11438 1.66667 2.66667 1.66667H4ZM12.3333 8.33333C12.8856 8.33333 13.3333 8.78105 13.3333 9.33333V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H11C10.4477 13.3333 10 12.8856 10 12.3333V9.33333C10 8.78105 10.4477 8.33333 11 8.33333H12.3333ZM4.16667 11.6667C4.6269 11.6667 5 12.0398 5 12.5V12.5C5 12.9602 4.6269 13.3333 4.16667 13.3333H2.5C2.03976 13.3333 1.66667 12.9602 1.66667 12.5V12.5C1.66667 12.0398 2.03976 11.6667 2.5 11.6667H4.16667ZM15 1C15 0.447715 14.5523 0 14 0H9.33333C8.78105 0 8.33333 0.447715 8.33333 1V4C8.33333 4.55228 8.78105 5 9.33333 5H14C14.5523 5 15 4.55228 15 4V1ZM6.66667 1C6.66667 0.447715 6.21895 0 5.66667 0H0.999999C0.447714 0 0 0.447715 0 1V7.33333C0 7.88562 0.447715 8.33333 1 8.33333H5.66667C6.21895 8.33333 6.66667 7.88562 6.66667 7.33333V1ZM15 7.66667C15 7.11438 14.5523 6.66667 14 6.66667H9.33333C8.78105 6.66667 8.33333 7.11438 8.33333 7.66667V14C8.33333 14.5523 8.78105 15 9.33333 15H14C14.5523 15 15 14.5523 15 14V7.66667ZM6.66667 11C6.66667 10.4477 6.21895 10 5.66667 10H0.999999C0.447714 10 0 10.4477 0 11V14C0 14.5523 0.447715 15 1 15H5.66667C6.21895 15 6.66667 14.5523 6.66667 14V11Z" fill="currentColor"/>
            </svg>
          </button>
          <button className='btn min-h-full sm:min-h-0 w-full px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.2 15.8L15.4 17M9.79999 13.8C9.79999 14.4365 10.0528 15.047 10.5029 15.4971C10.953 15.9471 11.5635 16.2 12.2 16.2C12.8365 16.2 13.447 15.9471 13.897 15.4971C14.3471 15.047 14.6 14.4365 14.6 13.8C14.6 13.1635 14.3471 12.553 13.897 12.1029C13.447 11.6529 12.8365 11.4 12.2 11.4C11.5635 11.4 10.953 11.6529 10.5029 12.1029C10.0528 12.553 9.79999 13.1635 9.79999 13.8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.8 9V3.9992C13.8 3.93605 13.7876 3.87351 13.7635 3.81517C13.7393 3.75683 13.7039 3.70382 13.6592 3.6592L11.1408 1.1408C11.0509 1.05076 10.9289 1.00011 10.8016 1H1.48C1.3527 1 1.23061 1.05057 1.14059 1.14059C1.05057 1.23061 1 1.3527 1 1.48V16.52C1 16.6473 1.05057 16.7694 1.14059 16.8594C1.23061 16.9494 1.3527 17 1.48 17H6.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 1.26507V3.54993C11 3.66929 11.0474 3.78377 11.1318 3.86817C11.2162 3.95258 11.3306 4 11.4499 4H13.734C13.7865 4.00026 13.838 3.98485 13.8818 3.95573C13.9256 3.9266 13.9598 3.88509 13.9799 3.83648C14 3.78786 14.0052 3.73436 13.9948 3.68279C13.9843 3.63122 13.9588 3.58392 13.9214 3.54693L11.4529 1.07754C11.4158 1.0405 11.3685 1.01528 11.3171 1.00508C11.2657 0.99487 11.2124 1.00013 11.1639 1.02019C11.1155 1.04025 11.0741 1.07421 11.0449 1.11779C11.0157 1.16137 11.0001 1.21262 11 1.26507Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {/* Account Menu */}
        <div className="flex w-full h-full sm:w-auto sm:h-auto justify-evenly sm:justify-start sm:flex-col sm:gap-4 py-2 sm:py-6">
          <button className='btn min-h-full sm:min-h-0 w-full px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.00002 6.91473C9.94175 6.91473 10.6364 6.14262 10.6364 5.09372C10.6364 4.04482 9.94175 3.27271 9.00002 3.27271C8.05911 3.27271 7.36366 4.04482 7.36366 5.09372C7.36366 6.14262 8.05911 6.91473 9.00002 6.91473ZM9.00002 7.82524C7.19266 7.82524 5.72729 9.29298 5.72729 11.1031V11.4545H12.2727V11.1031C12.2727 9.29298 10.8074 7.82524 9.00002 7.82524Z" fill="currentColor"/>
              <path d="M15.3637 0H2.63642C1.63369 0 0.818237 0.8073 0.818237 1.8V13.5C0.818237 14.4927 1.63369 15.3 2.63642 15.3H6.27278L9.00006 18L11.7273 15.3H15.3637C16.3664 15.3 17.1819 14.4927 17.1819 13.5V1.8C17.1819 0.8073 16.3664 0 15.3637 0ZM10.8182 13.5L9.00006 15.3L7.18187 13.5H2.63642V1.8H15.3637L15.3655 13.5H10.8182Z" fill="currentColor"/>
            </svg>
          </button>
          <button className='btn min-h-full sm:min-h-0 w-full px-0 hover:text-primary hover:bg-transparent active:bg-transparent'>
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.57272 16C5.28217 15.6147 4.11337 14.9018 3.18009 13.9307C3.48037 13.5746 3.66755 13.1369 3.71769 12.6738C3.76783 12.2106 3.67865 11.7431 3.46155 11.3309C3.24445 10.9188 2.90931 10.5808 2.49902 10.3601C2.08873 10.1395 1.62194 10.0464 1.1584 10.0925C1.05279 9.57526 0.999725 9.04863 1 8.52068C1 7.70529 1.12484 6.91877 1.35737 6.17985H1.39014C1.78798 6.17998 2.1793 6.07871 2.52713 5.88559C2.87496 5.69248 3.16783 5.4139 3.3781 5.07615C3.58836 4.73841 3.70906 4.35265 3.72882 3.95529C3.74858 3.55794 3.66674 3.1621 3.49103 2.80517C4.40574 1.95343 5.51196 1.33428 6.71629 1C6.91229 1.38483 7.21093 1.70794 7.57916 1.93358C7.9474 2.15922 8.37088 2.27859 8.80275 2.27848C9.23462 2.27859 9.6581 2.15922 10.0263 1.93358C10.3946 1.70794 10.6932 1.38483 10.8892 1C12.0935 1.33428 13.1998 1.95343 14.1145 2.80517C13.9375 3.1646 13.8557 3.56345 13.877 3.96354C13.8982 4.36363 14.0218 4.75156 14.2359 5.09021C14.4501 5.42885 14.7475 5.70688 15.0998 5.89766C15.4521 6.08845 15.8475 6.18561 16.2481 6.17985C16.4857 6.93739 16.6062 7.72676 16.6055 8.52068C16.6055 9.05907 16.5509 9.58497 16.4471 10.0929C15.9836 10.0467 15.5168 10.1399 15.1065 10.3605C14.6962 10.5811 14.361 10.9192 14.1439 11.3313C13.9268 11.7435 13.8377 12.211 13.8878 12.6742C13.9379 13.1373 14.1251 13.575 14.4254 13.9311C13.4921 14.902 12.3233 15.6148 11.0328 16C10.8812 15.5277 10.5836 15.1156 10.1828 14.8233C9.78205 14.531 9.2988 14.3735 8.80275 14.3735C8.30669 14.3735 7.82344 14.531 7.42266 14.8233C7.02188 15.1156 6.72427 15.5277 6.57272 16Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
              <path d="M8.80274 11.2516C9.16137 11.2516 9.5165 11.181 9.84783 11.0437C10.1792 10.9065 10.4802 10.7053 10.7338 10.4517C10.9874 10.1982 11.1886 9.89709 11.3258 9.56576C11.4631 9.23442 11.5337 8.8793 11.5337 8.52066C11.5337 8.16203 11.4631 7.80691 11.3258 7.47557C11.1886 7.14424 10.9874 6.84318 10.7338 6.58958C10.4802 6.33599 10.1792 6.13483 9.84783 5.99759C9.5165 5.86034 9.16137 5.7897 8.80274 5.7897C8.07844 5.7897 7.38381 6.07743 6.87166 6.58958C6.3595 7.10174 6.07178 7.79637 6.07178 8.52066C6.07178 9.24496 6.3595 9.93959 6.87166 10.4517C7.38381 10.9639 8.07844 11.2516 8.80274 11.2516V11.2516Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default NavMenu;