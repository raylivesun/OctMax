#!/usr/bin/octave
# Compute the magnitude of x.
# The magnitude is defined as |z| = sqrt (x^2 + y^2).
# For example:
# abs (3 + 4i)
#     ⇒ 5
function magnitude(x, y)
  x = 5
  y = 5
  z = sqrt(x^2 + y^2)
  abs(z+4i)
  # theta = arg (z) ¶
  # theta = angle (z) ¶
  # Compute the argument, i.e., angle of z.
  # This is defined as, theta = atan2 (y, x), in radians.
  # For example:
  # arg (3 + 4i)
  #   ⇒ 0.92730
  theta = arg(z)
  theta = angle(z)
  theta = atan2(x,y)
  arg(3 + 4i)
  #: zc = conj (z) ¶
  # Return the complex conjugate of z.
  # The complex conjugate is defined as conj (z) = x - iy.
  # See also: real, imag.
  zc = conj(z)
  #: zsort = cplxpair (z) ¶
  #: zsort = cplxpair (z, tol) ¶
  #: zsort = cplxpair (z, tol, dim) ¶
  # Sort the numbers z into complex conjugate pairs
  # ordered by increasing real part.
  # The negative imaginary complex numbers are placed first
  # within each pair. All real numbers (those with abs (imag (z)) / abs (z) < tol)
  # are placed after the complex pairs.
  # tol is a weighting factor in the range [0, 1) which determines the tolerance
  # of the matching. The default value is 100 * eps and the resulting tolerance
  # for a given complex pair is tol * abs (z(i))).
  # By default the complex pairs are sorted along the first non-singleton dimension
  # of z. If dim is specified, then the complex pairs are sorted along this dimension.
  # Signal an error if some complex numbers could not be paired. Signal an error if all
  # complex numbers are not exact conjugates (to within tol). Note that there is no defined
  # order for pairs with identical real parts but differing imaginary parts.
  # cplxpair (exp (2i*pi*[0:4]'/5)) == exp (2i*pi*[3; 2; 4; 1; 0]/5)
  tol = 0
  i = 4
  zsort = cplxpair(z)
  zsort = cplxpair(z, tol)
  abs(imag(z) / abs(z) < tol)
  cplxpair(exp(2i*pi*[0:4]'/5)) == exp(2i*pi*[3; 2; 4; 1; 0]/5)
  # : y = imag (z) ¶
  # Return the imaginary part of z as a real number.
  # See also: real, conj.
  # : x = real (z) ¶
  # Return the real part of z.
  # See also: imag, conj.
  y = imag(z)
  x = real(z)
end
