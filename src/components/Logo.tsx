type Props = {
  className: string;
};

function Logo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="19.38"
      fill="none"
      viewBox="0 0 320 31"
      className={`${className}`}
    >
      <path d="M18.79 25.645L0 17.325v-1.856l18.79-9.297v2.89L3.515 16.27l15.273 6.503v2.872zM37.344 30.39l-9.59-25.273h-.156c.052.534.097 1.185.136 1.953.04.769.072 1.608.098 2.52.026.898.04 1.816.04 2.754V30.39h-3.087V1.836h4.922l9.043 23.75h.137l9.18-23.75h4.882V30.39h-3.281V12.109c0-.846.013-1.692.039-2.539a113.823 113.823 0 01.215-4.414h-.156l-9.707 25.235h-2.715zM68.281 8.633c2.552 0 4.447.573 5.684 1.719 1.237 1.145 1.855 2.975 1.855 5.488v14.55h-2.363l-.625-3.163h-.156a11.883 11.883 0 01-1.875 1.972 6.97 6.97 0 01-2.266 1.192c-.846.26-1.888.39-3.125.39-1.302 0-2.46-.228-3.476-.683a5.414 5.414 0 01-2.383-2.07c-.573-.925-.86-2.097-.86-3.516 0-2.136.847-3.776 2.54-4.922 1.692-1.146 4.27-1.771 7.734-1.875l3.691-.156V16.25c0-1.849-.397-3.145-1.191-3.887s-1.914-1.113-3.36-1.113c-1.12 0-2.187.163-3.203.488a21.92 21.92 0 00-2.89 1.153l-.996-2.461c.963-.495 2.07-.918 3.32-1.27a14.506 14.506 0 013.945-.527zm4.336 11.21l-3.261.137c-2.67.105-4.551.54-5.645 1.31-1.094.767-1.64 1.855-1.64 3.26 0 1.225.37 2.13 1.113 2.716.742.586 1.725.879 2.949.879 1.9 0 3.457-.528 4.668-1.582 1.21-1.055 1.816-2.637 1.816-4.747v-1.972zM89.414 28.125c.534 0 1.08-.046 1.64-.137.56-.09 1.016-.201 1.368-.332v2.52c-.378.17-.905.312-1.582.43-.664.117-1.315.175-1.953.175-1.133 0-2.162-.195-3.086-.586-.925-.403-1.667-1.08-2.227-2.03-.547-.951-.82-2.267-.82-3.946V11.523h-3.047V9.941l3.066-1.27 1.29-4.648h1.953v4.961h6.27v2.54h-6.27V24.12c0 1.341.306 2.344.918 3.008.625.664 1.451.996 2.48.996zM100 0v9.082a32.4 32.4 0 01-.04 1.582c-.025.52-.07 1.003-.136 1.445h.215a6.365 6.365 0 011.68-1.894 7.337 7.337 0 012.343-1.172 9.225 9.225 0 012.774-.41c1.719 0 3.151.273 4.297.82a5.4 5.4 0 012.597 2.54c.586 1.145.879 2.63.879 4.452v13.946h-3.203V16.66c0-1.785-.41-3.12-1.23-4.005-.808-.885-2.051-1.328-3.731-1.328-1.588 0-2.858.306-3.808.918-.938.6-1.615 1.484-2.032 2.656-.403 1.172-.605 2.604-.605 4.297v11.192h-3.242V0H100zM129.531 8.594c1.823 0 3.386.403 4.688 1.21 1.302.808 2.298 1.94 2.988 3.4.69 1.444 1.035 3.137 1.035 5.077v2.012h-14.785c.039 2.513.664 4.427 1.875 5.742 1.211 1.315 2.917 1.973 5.117 1.973 1.354 0 2.552-.124 3.594-.371a19.817 19.817 0 003.242-1.094v2.852a15.78 15.78 0 01-3.223 1.054c-1.054.222-2.304.332-3.75.332-2.057 0-3.854-.416-5.39-1.25-1.524-.846-2.708-2.083-3.555-3.71-.846-1.628-1.269-3.62-1.269-5.977 0-2.305.384-4.297 1.152-5.977.781-1.693 1.875-2.995 3.281-3.906 1.42-.912 3.086-1.367 5-1.367zm-.039 2.656c-1.732 0-3.112.566-4.14 1.7-1.029 1.132-1.641 2.714-1.836 4.745h11.328c-.013-1.276-.215-2.396-.606-3.36-.377-.976-.957-1.73-1.738-2.265-.781-.547-1.784-.82-3.008-.82zM161.426 8.984v21.407h-2.656l-.469-3.008h-.176a6.227 6.227 0 01-1.719 1.875 7.454 7.454 0 01-2.383 1.133c-.872.26-1.803.39-2.793.39-1.692 0-3.112-.273-4.257-.82a5.52 5.52 0 01-2.598-2.54c-.573-1.145-.859-2.616-.859-4.413V8.984h3.281v13.79c0 1.783.404 3.118 1.211 4.003.807.873 2.038 1.309 3.691 1.309 1.589 0 2.852-.3 3.789-.898.951-.6 1.634-1.478 2.051-2.637.417-1.172.625-2.604.625-4.297V8.984h3.262zM182.129 24.531c0 1.367-.345 2.52-1.035 3.457-.677.925-1.654 1.621-2.93 2.09-1.263.469-2.773.703-4.531.703-1.498 0-2.793-.117-3.887-.351-1.094-.235-2.051-.567-2.871-.996v-2.989c.872.43 1.914.82 3.125 1.172s2.448.527 3.711.527c1.849 0 3.19-.299 4.023-.898.834-.599 1.25-1.413 1.25-2.441 0-.586-.169-1.1-.507-1.543-.326-.456-.879-.892-1.661-1.309-.781-.43-1.862-.898-3.242-1.406-1.367-.521-2.552-1.035-3.554-1.543-.99-.52-1.758-1.152-2.305-1.895-.534-.742-.801-1.705-.801-2.89 0-1.81.729-3.197 2.188-4.16 1.471-.977 3.398-1.465 5.781-1.465 1.289 0 2.493.13 3.613.39 1.133.248 2.188.586 3.164 1.016l-1.094 2.598a20.038 20.038 0 00-2.832-.957 12.14 12.14 0 00-3.066-.391c-1.497 0-2.65.247-3.457.742-.794.495-1.191 1.172-1.191 2.031 0 .665.182 1.211.546 1.641.378.43.977.833 1.797 1.211.821.378 1.901.82 3.242 1.328 1.342.495 2.5 1.01 3.477 1.543.977.52 1.725 1.159 2.246 1.914.534.742.801 1.7.801 2.871zM185.605 27.148c0-1.38.404-2.35 1.211-2.91.821-.56 1.804-.84 2.95-.84 1.08 0 2.018.28 2.812.84.794.56 1.192 1.53 1.192 2.91 0 1.316-.398 2.266-1.192 2.852-.794.586-1.732.879-2.812.879-1.146 0-2.129-.293-2.95-.879-.807-.586-1.211-1.537-1.211-2.852zM222.812 15.508c0 3.32-.618 6.08-1.855 8.281-1.237 2.2-2.982 3.854-5.234 4.961-2.24 1.094-4.877 1.64-7.911 1.64h-9.238V1.837h9.883c3.073 0 5.677.527 7.813 1.582 2.135 1.055 3.756 2.598 4.863 4.629 1.12 2.031 1.679 4.518 1.679 7.46zm-8.007.273c0-1.732-.235-3.164-.703-4.297-.456-1.146-1.146-1.998-2.071-2.558-.924-.573-2.09-.86-3.496-.86h-2.246v15.996h1.719c2.344 0 4.062-.677 5.156-2.03 1.094-1.368 1.641-3.451 1.641-6.25zM237.461 7.871c2.148 0 4.004.378 5.566 1.133a7.994 7.994 0 013.614 3.36c.846 1.497 1.269 3.372 1.269 5.624v3.399h-13.652c.065 1.159.495 2.11 1.289 2.851.807.742 1.992 1.114 3.555 1.114 1.38 0 2.643-.137 3.789-.41a18.463 18.463 0 003.574-1.27v5.488c-1.068.56-2.233.97-3.496 1.23-1.263.261-2.858.391-4.785.391-2.227 0-4.219-.397-5.977-1.191s-3.145-2.025-4.16-3.692c-1.003-1.666-1.504-3.808-1.504-6.425 0-2.657.456-4.838 1.367-6.543.912-1.72 2.188-2.989 3.828-3.809 1.641-.833 3.548-1.25 5.723-1.25zm.273 5.195c-.898 0-1.653.287-2.265.86-.599.56-.951 1.445-1.055 2.656h6.563a4.395 4.395 0 00-.391-1.777 2.963 2.963 0 00-1.094-1.27c-.469-.312-1.054-.469-1.758-.469zM258.027 30.39L249.59 8.263h7.969l3.75 13.086c.039.117.104.416.195.898.104.482.156.931.156 1.348h.137c0-.443.045-.866.137-1.27.091-.403.162-.716.214-.937l3.926-13.125h7.949l-8.437 22.129h-7.559zM298.672 1.836L288.047 30.39h-3.203l10.644-28.555h3.184zM301.133 22.773l15.293-6.464-15.293-7.247v-2.89l18.789 9.297v1.855l-18.789 8.32v-2.87z"></path>
    </svg>
  );
}

export default Logo;
